const { User } = require('../models');

const userData = [
    {
        name: "Alejandra Bernabel",
        email: "alejandra@gmail.com",
        password: "password1234",
    }, 
    {
        name: "Christian Bernabel",
        email: "chris@gmail.com",
        password: "password1234"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
