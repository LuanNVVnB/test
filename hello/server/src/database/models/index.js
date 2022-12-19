'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};
let { sequelize } = require('../../configs/db.config');
const env = process.env.NODE_ENV || 'development';
const envConfigs = require('../config/config')
const config = envConfigs[env];

if (env === 'development') {
    sequelize = new Sequelize(config.url, config);
}

db.sequelize = sequelize;

db.users = require('./user')(sequelize, Sequelize)
db.comments = require('./comment')(sequelize, Sequelize)
db.posts = require('./post')(sequelize, Sequelize)
db.address = require('./address')(sequelize, Sequelize)
db.geos = require('./geo')(sequelize, Sequelize)
db.companys = require('./company')(sequelize, Sequelize)
db.tags = require('./tags')(sequelize, Sequelize)

db.users.hasMany(db.posts, { as: 'posts', foreignKey: 'userId' })
db.posts.belongsTo(db.users, { as: 'users', foreignKey: 'userId' })
db.posts.hasMany(db.comments, { as: 'comments', foreignKey: 'postId' })
db.comments.belongsTo(db.posts, { as: 'posts', foreignKey: 'postId' })
db.users.hasMany(db.address)
db.address.hasMany(db.geos)
db.users.hasMany(db.companys)
db.tags.hasMany(db.posts)
db.posts.hasMany(db.tags)

sequelize.sync();

module.exports = db;
