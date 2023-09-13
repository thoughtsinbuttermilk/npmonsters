const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');

 const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

};

seedDatabase();