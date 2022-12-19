'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    postId: { type: Sequelize.INTEGER },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    body: DataTypes.LONGTEXT,
  }, { underscored: true, tableName: 'comments' });

  Comments.associate = function (models) {
  };

  return Comments;
};
