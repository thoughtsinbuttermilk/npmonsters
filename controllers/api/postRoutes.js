const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        const dbPostData = await Post.create({
            pet_name: req.body.pet_name,
            pet_type: req.body.pet_type,
            description: req.body.description,
            pet_breed: req.body.pet_breed,
            date_created: req.body.date_created
        });

        req.session.save(() => {
            res.status(200).json(dbPostData)
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;