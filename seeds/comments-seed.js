const { Comment } = require('../models');

const commentData = [
    {
        body: "I agree! MVC Pattern is kicking my butt",
        user_id: 2, //Christian made this comment
    }, 
    {
        body: "I actually agree! I think sequelize made my head hurt wayyyy more than just the original SQL.",
        user_id: 1, //Alejandra made this comment
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
