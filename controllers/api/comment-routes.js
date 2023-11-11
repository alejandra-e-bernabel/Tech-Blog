const router = require('express').Router();
const { Comment } = require ('../../models');

//the `/api/comments` endpoint

// to get all comments

router.get('/', (req, res) => {
    Comment.findAll()
    .then((comments) => res.json(comments))
    .catch((err)=> {
        console.log(err);
        res.status(500).json(err);
    });
});

//get one comment

router.get('/:id', (req, res) => {
    Comment.findOne({
        where: {
            id: req.params.id,
        }
    })
    .then((comments) => res.json(comments))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create new comment

router.post('/', (req, res) => {
    Comment.create(req.body)
        .then((comment) => res.status(200).json(comment))
        .catch((err) => res.status(400).json(err));
});


//update a comment
router.put('/:id', (req, res) => {
    Comment.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((comment)=> res.status(200).json(comment))
    .catch((err)=> res.status(400).json(err));
});

//delete a comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((comment) => res.status(200).json(comment))
    .catch((err)=> res.status(400).json(err));
});