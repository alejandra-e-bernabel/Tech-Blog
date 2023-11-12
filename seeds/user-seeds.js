const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        name: "Alejandra Bernabel",
        email: "alejandra@gmail.com",
        password: bcrypt.hashSync("password1234", 10),
    }, 
    {
        name: "Christian Bernabel",
        email: "chris@gmail.com",
        password: bcrypt.hashSync("password1234", 10)
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
