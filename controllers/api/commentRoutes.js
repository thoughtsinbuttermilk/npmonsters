const router = require('express').Router();

router.post('/', async(req, res) => {
    try {
        const dbCommentData = await Comment.create({
            content : req.body.content
        });
        
        req.session.save(() => {
            res.status(200).json(dbCommentData)
        })
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;