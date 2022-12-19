const express = require('express');
const PostRouting = express.Router();
const { CommonMethodConstant } = require("../constants/api.constant");
const {
    // getAllPost, createPost, getByIdPost, updatePost, deletePost
    createPost, getAllPost
} = require('../controllers/post.constroller');

PostRouting.get(`${CommonMethodConstant.GetAllPost}`, getAllPost);
PostRouting.post(`${CommonMethodConstant.PostPostBlog}`, createPost);

module.exports = { PostRouting };