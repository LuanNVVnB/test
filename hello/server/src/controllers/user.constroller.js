const { UserService, } = require('../services/index.js');
const createToken = require("../helper/token_utils");
const logger = require('../logger/winston.logger');

const getAll = (async (req, res) => {
    console.log("hellooooo")
    return res.status(200).json({
        code: "Success",
        data: await UserService.getAll()
    });
   
});
const postLogin = async (req, res) => {
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

const postRegister = async (req, res) => {
    try{
        const { username, name, email, password, website,phone } = req.body;
        console.log("user", req.body)
        if (!username || !name || !email || !password || !website) return res.status(400).json({
            code: "Error",
            message: 'parameter not null'
        });
        const data = await UserService.createUserAsync(username, name, email, password, website,phone);
        if (data !== null) return res.status(200).json({
            code: "Success",
            message: 'user updated'});
        else return res.status(200).json(res.status(200).json({
            code: "Error",
            message: 'user update error'
        }));
    }catch(e){
        console.log(e);
       return  res.status(200).json(res.status(400).json({
            code: "Error",
            message: 'user creata error'
        }));
    }
    
}

module.exports = {
    getAll,
    postLogin,
    postRegister,
   
}