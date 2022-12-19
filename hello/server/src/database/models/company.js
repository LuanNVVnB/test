'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
          name: DataTypes.STRING,
          catchPhrase: DataTypes.STRING,
          bs: DataTypes.STRING,

    }, { underscored: true, tableName: 'company' });
  
    return Company;
};
