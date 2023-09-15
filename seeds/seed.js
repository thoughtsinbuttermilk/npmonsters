const sequelize = require('../config/connection');
const seedPosts = require('./postData');
const seedUsers = require('./userData');
const seedComments = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true});

    await seedPosts();

    await seedUsers();

    await seedComments();
};

seedAll();
