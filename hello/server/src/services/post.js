const { posts, sequelize } = require('../database/models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const getAllPostAsync = async () => {
    try {
        const result = await posts.findAll();
        return result;
    } catch (err) {
        console.log("error", err)
    }
}

const createPostAsync = async (owner, title, content, tags) => {
    const newPost = {};
    newPost['owner'] = owner;
    newPost['title'] = title;
    newPost['content'] = content;
    const tagAll = await tags.findAll();
    if(tags.length<0){
        return null;
    }else{

        for(let i=0; i<tags.length; i++){
            if (!tagAll.find(item => item.tag === tags[i])) {
                return tags.create({ tags: tags[i] })
            } else {
                return tags.update()
            }
        }
     
          
        await posts.create(newPost);
        return posts;
    }

   
}



module.exports = {
    getAllPostAsync, createPostAsync
}
