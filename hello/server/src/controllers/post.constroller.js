const { PostService }= require('../services/index.js');
const createToken = require("../helper/token_utils");
const logger = require('../logger/winston.logger');

const getAllPost = (async (req, res) => {
    console.log("hellooooo")
    return res.status(200).json({
        code: "Success",
        data: await UserService.getAll()
    });
   
});
const createPost = async (req, res) => {
    const { username, password } = req.body;
    console.log("user login",req.body)
    try {
        let user = await UserService.loginAsync(username, password);
      
        if (user !== null) {
            let token = createToken(user);
            return res.status(200).json({
                code: "Success",
                data: token
            });
        } else {
            return res.status(400).json({
                code: "Error",
                message: "Username or password incorrect"
            });
        }
    } catch (error) {
        console.log(error);
       return  res.status(400).json({
            code: "Error",
            message: error.message
        });
    }

}



module.exports = {
    createPost, getAllPost
   
}