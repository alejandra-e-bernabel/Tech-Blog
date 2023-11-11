const { Comment } = require('../models');

const commentData = [
    {
        body: "I agree! MVC Pattern is kicking my butt",
        user_id: 2, //Christian made this comment
        post_id: 1, //this comment was made on post 1
    }, 
    {
        body: "I actually agree! I think sequelize made my head hurt wayyyy more than just the original SQL.",
        user_id: 1, //Alejandra made this comment
        post_id: 2, //this comment was made on post 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
