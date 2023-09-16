const sequelize = require('../config/connection');
const { user, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
// const commentData = require('../');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const User = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const Post = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  // const comments = await Comment.bulkCreate(commentData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();