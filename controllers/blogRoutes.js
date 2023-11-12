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
            other: [['createdAt'], 'DESC']
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


//this needs to be fixed so that it only outputs data from a specific user
//currently it is printing everything from all users
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
})


module.exports = router;