'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        street: {
            type: DataTypes.STRING,
        },
        suite: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        zipcode: {
            type: DataTypes.STRING,
        },
    }, { underscored: true, tableName: 'address' });

    return Address;
};
