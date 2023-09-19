const router = require('express').Router();
const {User, Post} = require('../models');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
          attributes: { exclude: ['password'] },
          order: [['username', 'ASC']],
        });
        
        const postData = await Post.findAll({
          attributes: { exclude: ['date_created'] }
        });

        const user = userData.map((user) => user.get({ plain: true }))
        const post = postData.map((post) => post.get({ plain: true }))

        res.render('homepage', {
          user,
          post,
          // Pass the logged in flag to the template
          logged_in: req.session.logged_in,
        });

      } catch (err) {
        res.status(500).json(err);
      }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;