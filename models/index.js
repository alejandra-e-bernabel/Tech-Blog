//import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//posts belongsTo one User
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//Users have many posts
User.hasMany(Post, {
    foreignKey: 'user_id',
})


//comments belongsTo one User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE' 
});

//Users have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

//comments belong to one post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

//posts have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
})


module.exports = { 
    User,
    Post,
    Comment
 };
