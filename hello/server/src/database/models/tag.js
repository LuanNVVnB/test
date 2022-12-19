'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Tags = sequelize.define('Tags', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        tags: {
            type: Sequelize.STRING
        },
    }, { underscored: true, tableName: 'tags' });
   
    return Tags;
};
