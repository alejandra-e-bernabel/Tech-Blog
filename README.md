# Tech Blog -- Sequelize & Handlebars Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

My goal for this project was to integrate all the concepts that I've learned in the past few months. Among these skills, perhaps the toughest has been figuring out the way that front end and back end work together in the context of routes. Since this proejct also was my first time using handlebars,  there was the added challenge of learning how Handlebars accessed information from the front end, how to send this handlebars rendered data to my javascript files, then how to access my backend routes. Although challenging, I believe the hours poured into this project have let me to understand these concepts much more deeply that I did before.

![Log in to view posts](/public/images/image.png)
![Log in](/public/images/image-1.png)
![Sign up](/public/images/image-2.png)
![Dashboard](/public/images/image-3.png)
![Comments on a post](/public/images/image-4.png)
![Editing a post](/public/images/image-5.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions?)

## Installation

In the CLI, type "npm i" to download dependencies needed to run the project. 

Create a .env file with your SQL database information. In your MySQL CLI, type in "source < database path >".

To seed database, in CLI, type "npm run seeds".

To start app, type "npm start" into terminal.

## Usage

On the front end, this app works as follows: 

Most functionaly requires logging in. On the first login attempt, an account must be made. The username/password combination will then be saved to a MySQL database. The password will be hashed, so it is secure. 

After an account is made, the user can navigate to the dashboard, in which all posts from all users can be seen. Upon clicking on a dashboard post, the user, if still logged in, has the option to add a comment to this post. 

There is also the "your posts" section, in which te user can view, edit, or delete posts made under their account ID and add new posts. 

Sessions will time out after five minutes of inactivity. The user can also log out using the navigation logout link.

## License 

[MIT](https://choosealicense.com/licenses/mit/)

## Questions? 

If you have questions or have notived a bug in this code, please reach out:
Name: Alejandra Bernabel
Email: alejandra.e.bernabel@gmail.com
GitHub: alejandra-e-bernabel
