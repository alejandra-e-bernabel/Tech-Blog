const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

//title, body, user_id of poster, date posted, comments
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //to track who posted it
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: id
            }
        },
        //to track any possible comments
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'comment',
                key: id
            }
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post;