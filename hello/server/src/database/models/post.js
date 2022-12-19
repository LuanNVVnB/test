'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Posts = sequelize.define('Posts', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        userId: { type: Sequelize.INTEGER } ,
        title: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.LONGTEXT  
        },
        
        created_by: {
            type: Sequelize.STRING
        },
        deleted_by: {
            type: Sequelize.STRING
        },
        updated_by: {
            type: Sequelize.STRING
        },
        deleted_at: {
            type: Sequelize.DATE
        },
       
    }, { underscored: true, tableName: 'posts' });
  
    return Posts;
};
