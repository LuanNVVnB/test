'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Geo = sequelize.define('Geo', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        lat: {
            type: DataTypes.STRING,
        },
        lng: {
            type: DataTypes.STRING,
        },
    }, { underscored: true, tableName: 'geo' });

    return Geo;
};
