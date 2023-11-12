const router = require('express').Router();
const { Post } = require ('../../models');

//the `/api/posts` endpoint

// to get all posts

router.get('/', (req, res) => {
    Post.findAll()
    .then((posts) => res.json(posts))
    .catch((err)=> {
        console.log(err);
        res.status(500).json(err);
    });
});

//get one post

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id,
        }
    })
    .then((posts) => res.json(posts))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create new post (for seeding purposes)
router.post('/', (req, res) => {

    Post.create(req.body)
        .then((post) => res.status(200).json(post))
        .catch((err) => res.status(400).json(err));
});

//used in creating a new post on through the front end
//create a new post and assign user_id as whoever is logged in and making the post
router.post('/createPost', (req, res) => {

    const user_id = req.session.user_id;

    const newPost = {...req.body, user_id};

    Post.create(newPost)
        .then((post) => res.status(200).json(post))
        .catch((err) => res.status(400).json(err));
});


//update a post
router.put('/:id', (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((post)=> res.status(200).json(post))
    .catch((err)=> res.status(400).json(err));
});

//delete a post
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((post) => res.status(200).json(post))
    .catch((err)=> res.status(400).json(err));
});

module.exports = router;
