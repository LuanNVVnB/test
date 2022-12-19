const { users, sequelize } = require('../database/models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



const loginAsync = async (username, password) => {

  let user = await users.findOne({
    where: { username: username },
  });

  if (user !== undefined && user !== null) {
    console.log("user", user);
    let result = await bcrypt.compare(password, user.passwordHash);
    if (result) {
      return user;
    } else {
      return null;
    }
  } else {
    return null;
  }
};
const getAll = async () => {
  try {
    const result = await users.findAll();
    return result;
  } catch (err) {
    console.log("error", err)
  }
}

const createUserAsync = async (username, name, email, password, website, phone) => {
  const newUser = {};
  newUser['username'] = username;
  newUser['name'] = name;
  newUser['email'] = email;
  newUser['phone'] = phone;
  newUser['passwordHash'] = await bcrypt.hash(password, saltRounds);
  newUser['website'] = website;
  newUser['dob'] = new Date();
  await users.create(newUser);
  return users;
}



module.exports = {
  getAll, loginAsync, createUserAsync
}
