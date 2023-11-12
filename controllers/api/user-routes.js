const router = require('express').Router();
const { User, Post } = require('../../models');

//the `/api/users` endpoint

// to get all users

router.get('/', (req, res) => {
    User.findAll({ include: [Post]})
        .then((users) => res.json(users))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get one user

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id,
        },
        include: [Post]
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
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json(err));
});

//delete a user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json(err));
});


//log in existing user
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again' });
        } else {
            const validPassword = await userData.checkPassword(req.body.password);

            if (!validPassword) {
                res.status(400).json({ message: 'Incorrect email or password, please try again' });
            } else {
                req.session.save(() => {
                    req.session.user_id = userData.id;
                    req.session.logged_in = true;

                    res.json({ user: userData, message: 'You are now logged in!' });
                });
            };
        };
    } catch (err) {
        res.status(400).json(err);
    };
});

//create account and log in
router.post('/signup', async (req, res) => {
    try {
        const dbUserData = await User.create({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.logged_in = true;

            res.status(200).json(dbUserData);
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// log out a user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
