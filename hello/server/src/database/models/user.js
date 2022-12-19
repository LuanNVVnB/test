'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    passwordHash:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dob:{
      type: Sequelize.DATE,
    },
    phone: {
      type: DataTypes.STRING,
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
    created_at: {
      type: Sequelize.DATE,
      // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    deleted_at: {
      type: Sequelize.DATE
    },
    updated_at: {
      type: Sequelize.DATE,
    },


  }, { underscored: true, tableName: 'user' });
 
  return User;
};
