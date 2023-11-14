const router = require('express').Router();
const { User, Post} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
    try{
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
            other: [['name'], 'ASC'],
        });

        const users = userData.map((project) => project.get({ plain: true }));
        
        const postData = await Post.findAll({
            other: [['createdAt'], 'DESC'],
            include: [User]
        });
        const posts = postData.map((project) => project.get({plain: true}));

        
        res.render('dashboard', {
            users,
            posts,
            logged_in: req.session.logged_in,
        });   
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
    } else {
        res.render('login');
    }
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
    } else {
        res.render('signup');
    }
});


//displays only posts made by logged in user
router.get('/home', async (req, res) => {
    try{
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
            other: [['name'], 'ASC'],
        });

        const users = userData.map((project) => project.get({ plain: true }));
        
        const postData = await Post.findAll({
            // where: {user_id: userData.map(user => user.id)},
            other: [['createdAt'], 'DESC']
        });
        const posts = postData.map((project) => project.get({plain: true}));

        
        res.render('homepage', {
            users,
            posts,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id
        });   
    } catch (err) {
        res.status(500).json(err);
    }
});

//displays new post page
router.get('/newPost', async (req,res)=> {
    try{
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
            other: [['name'], 'ASC'],
        });

        const users = userData.map((project) => project.get({ plain: true }));
        
        const postData = await Post.findAll({
            // where: {user_id: userData.map(user => user.id)},
            other: [['createdAt'], 'DESC']
        });
        const posts = postData.map((project) => project.get({plain: true}));

        //logged_in variable returns true/false if logged in or not
        //user_id is the id of the logged in user
        //users is the User object
        //posts is the Post object
        res.render('createPost', {
            users,
            posts,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id
        });   
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/viewPost/:id', async (req,res)=> {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({plain: true});
        res.render('viewPost', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    };
});




module.exports = router;