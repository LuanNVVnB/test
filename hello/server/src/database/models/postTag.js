'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const PostTags = sequelize.define('PostTags', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        postId: {
            type: Sequelize.INTEGER,
        },
        tagId:{
            type: Sequelize.INTEGER,
        }
    }, { underscored: true, tableName: 'postTags' });

    return PostTags;
};
