const { Comment } = require('../models');

const commentData = [
    {
       'content' : 'Very cool dog, I am interested send me a messege if available', 
       'user_id' : 1 
    },
    {
        'content' : 'Very cool dog, I am interested send me a messege if available',
        'user_id' : 2 
    },
    {
        'content' : 'Very cool dog, I am interested send me a messege if available',
        'user_id' : 3   
    }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments;