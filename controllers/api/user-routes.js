const router = require('express').Router();
const { User } = require ('../../models');

//the `/api/users` endpoint

// to get all users

router.get('/', (req, res) => {
    User.findAll()
    .then((users) => res.json(users))
    .catch((err)=> {
        console.log(err);
        res.status(500).json(err);
    });
});

//get one user

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id,
        }
    })
    .then((users) => res.json(users))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create new user

router.post('/', (req, res) => {
    User.create(req.body)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json(err));
});


//update a user
router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then((user)=> res.status(200).json(user))
    .catch((err)=> res.status(400).json(err));
});

//delete a user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((user) => res.status(200).json(user))
    .catch((err)=> res.status(400).json(err));
});

module.exports = router;
