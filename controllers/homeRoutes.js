const router = require('express').Router();
const {User, Post} = require('../models');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
          attributes: { exclude: ['password'] },
          order: [['username', 'ASC']],
        });

        const user = userData.map((user) => user.get({ plain: true }))

        // res.render('', {
        //   user,
        //   // Pass the logged in flag to the template
        //   logged_in: req.session.logged_in,
        // });

      } catch (err) {
        res.status(500).json(err);
      }
});

router.get('/posts', async (req, res) => {
  try{
    const postsData = await Post.findAll({
      
    });

    const posts = postsData.map((post) => post.get({ plain: true }))

    console.log(posts, "line 32")

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err){
    console.log(err)
    res.status(500).json(err)
  }
})

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;