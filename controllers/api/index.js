const router = require("express").Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes'); 
const loginRoutes = require('./loginRoutes'); 
const logoutRoutes = require('./logoutRoutes'); 
const commentRoutes = require('./commentRoutes'); 




router.use('/user', userRoutes); 
router.use('/post', postRoutes); 
router.use('/login', loginRoutes); 
router.use('/logout', logoutRoutes); 
router.use('/comment', commentRoutes)



module.export=router