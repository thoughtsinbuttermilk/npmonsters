const { Post } = require('../models');

const postData = [
    {
      'pet_name': "Rocket",
      'pet_type': "Dog",
      'description': "GREAT LOOKING PUP! Gets a bit anxious with dogs but is very loving and caring once she gets to know you",
      'pet_breed': "unkown"
    },
    {
      'pet_name': "Flash",
      'pet_type': "Dog",
      'description': "VERY ENERGETIC, but the best boy once his zoomies wear off",
      'pet_breed': "Siberian Husky"
    },
    {
      'pet_name': "Comet",
      'pet_type': "Dog",
      'description': "Very calm, cuddly and very well trained",
      'pet_breed': "Chow Chow"
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;