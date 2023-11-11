const { Post } = require('../models');

const postData = [
    {
        title: "MVC Pattern is crazy!",
        body: "Like, conceptually it makes sense... but really doing it is a ton of work!",
        user_id: 1, //Alejandra made this post
        // comment_id:1 //the first comment is attached to this post 
    }, 
    {
        title: "SQL is great!",
        body: "I love how the commands are straightforward and really make sense to me.",
        user_id: 2, //Christian made this post
        // comment_id:2 //the second comment is attached to this post 
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
