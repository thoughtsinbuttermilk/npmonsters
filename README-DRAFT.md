# 13 Module Challenge ORM eCommerce backend sam bailey

Northwestern Bootcamp challenge week 13

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

![npm](https://img.shields.io/npm/v/npm.svg?logo=npm)

![dotenv](https://img.shields.io/badge/dotenv-8_2._0-blue)

# Table of Contents

- [13 Module Challenge ORM eCommerce backend sam bailey](#13-module-challenge-orm-ecommerce-backend-sam-bailey)
- [Table of Contents](#table-of-contents)
  - [Project description](#project-description)
  - [Application functionality](#application-functionality)
  - [Technology used](#technology-used)
  - [Installation, configuration, usage instructions and known issues](#installation-configuration-usage-instructions-and-known-issues)
  - [Testing](#testing)
  - [Video walkthroughs](#video-walkthroughs)
  - [Credits and notes for the graders](#credits-and-notes-for-the-graders)

## Project description

The goal of this assignment is to build the backend for an e-commerce site. Starter code was provided. Express.js was used to build the working API and sequelize was used to interact with a MySQL database.

## Application functionality

After the database schema is loaded and the data seeded, the server is available at http://127.0.0.1:3001 requests can be made to the RESTful API using a GUI like [Insomnia](https://insomnia.rest/) or cURL commands in the terminal.

**_User of the application can:_**

1. Open GET requests to the API and view the database categories, products and tags
2. Use POST, PUT and DELETE requests to create, update and delete categories, products and tags

## Technology used

**_The application was built using:_**

[node.js, v20.5.0](https://nodejs.org/en), an asynchronous, event-driven JavaScript runtime designed to build scalable network applications

[express.js](https://expressjs.com/), a fast, _un-opinionated_, minimalist web framework for node.js

[MySql, v2.1.0](https://dev.mysql.com/doc/refman/8.1/en/), the world's _most popular_ open source database

[sequelize](https://sequelize.org/), sequelize is a modern TypeScript and Node.js ORM MySQL and other databases

[dotevn](https://www.npmjs.com/package/dotenv) A module that loads environment variables into process variables

[insomnia](https://insomnia.rest/) a GUI that provides an easy to use interface that supports designing, debugging and testiing APIs

[cURL](https://curl.se/), "clientURL" command line tools and libraries for transferring data with URLs

[json_pp](https://formulae.brew.sh/formula/jsonpp) a simple command line tool that pretty prints JSON data

## Installation, configuration, usage instructions and known issues

<details>
<summary> Expand for installation, configuration, usage instructions and known issues</summary>

1.  **Clone the repository, set up the environment\***

    Here is a [walkthrough demo](https://drive.google.com/file/d/1dyOxH_VC50VTslHVko83uGqQLYHogzfB/view?usp=sharing) of cloning the repository, copying a pre-existing .env file into the project sources, and configuring the database.
    
    • Clone the repository: `git clone git@github.com:thoughtsinbuttermilk/13-ModuleChallenge-ORMeCommerce-sambailey.git`

    • Install required frameworks, dependencies and packages by opening a terminal instance and running `npm install`

    • Open the project in your favorite code editor, create a .env file to configure the environment variables:

    `DB_NAME='ecommerce_db'`

    `DB_USER='<*your user name*>'`

    `DB_PASSWORD='<*your password*>'`

    • Add the .env file to your `.gitignore` file

2.  **_Configure the database environment_**

    • Connect to the mySQL shell:

    `mysql -u <username> -p <password>`

    • Source the database:

    `source db/schema.sql`

    • Show available databases:

    `show databases;`

    • Select the ecommerce database:

    `use ecommerce_db`

    • Quit the mySQL shell

    `\q`

    • Seed the database

    `npm run seed`

    • Start the server

    `npm start`

    The server should be running and available at http://127.0.0.1:3001

3.  **_Usage instructions_**

    **cURL**

    I used cURL as I developed the routes. If you want to use cURL, you should find a command line tool like [json_pp](https://formulae.brew.sh/formula/jsonpp) to make the responses "prettier" or "more readable by humans.

    Here are sample cURL requests which GET all categories, products and tags, respectively.

    **GET all categories**

    ```
    curl -X GET \ 
    -H "Content-type: application/json" \
    -H "Accept: application/json" \
    "http://127.0.0.1:3001/api/categories" | json_pp
    ```

    **GET all products**

    ```
    curl -X GET \
      -H "Content-type: application/json" \
      -H "Accept: application/json" \
      "http://127.0.0.1:3001/api/products" | json_pp
      ```

    **GET all tags**

    ```
    curl -X GET \
    -H "Content-type: application/json" \
    -H "Accept: application/json" \
    "http://127.0.0.1:3001/api/tags" | json_pp
    ```

    Please see [this video](https://drive.google.com/file/d/1irvkHV-ZoUpxdcm7__DS0ai764kx0iio/view?usp=sharing) for a demonstration of the cURL requests and the formatted responses courtesy of json_pp.

    **insomnia**

    Download [insomnia](https://insomnia.rest/) and take a look at the [documentation](https://docs.insomnia.rest/) for sending requests and receiving responses!


    ***Known issues***

    While I am able to delete new categories, which do not have associated Products or Tags, I am unable to delete existing Categories (with associations). Based on the behavior, I believe my routes are correct; that said, I have an open question to my instructor and TA. The error message:

    ```
    {
	"name": "SequelizeForeignKeyConstraintError",
	"parent": {
		"code": "ER_ROW_IS_REFERENCED_2",
		"errno": 1451,
		"sqlState": "23000",
		"sqlMessage": "Cannot delete or update a parent row: a foreign key constraint fails (`ecommerce_db`.`product`, CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE)",
		"sql": "DELETE FROM `category` WHERE `id` = '1'"
	},
	"original": {
		"code": "ER_ROW_IS_REFERENCED_2",
		"errno": 1451,
		"sqlState": "23000",
		"sqlMessage": "Cannot delete or update a parent row: a foreign key constraint fails (`ecommerce_db`.`product`, CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON UPDATE CASCADE)",
		"sql": "DELETE FROM `category` WHERE `id` = '1'"
	},
	"sql": "DELETE FROM `category` WHERE `id` = '1'",
	"fields": [
		"category_id"
	],
	"table": "category",
	"index": "product_ibfk_1",
	"reltype": "parent"}
    ```
    I have reviewed the [sequelize associations documentation](https://sequelize.org/docs/v6/core-concepts/assocs/) and haven't found a working solution (yet!).

    </details>

## Testing

The 1.0 version of this application does not have any unit tests.

## Video walkthroughs

Below, a couple of videos that demonstrate how to install, configure, and and interact with the the APIs using Insomnia.

[Clone source, configure environment and database](https://drive.google.com/file/d/1dyOxH_VC50VTslHVko83uGqQLYHogzfB/view?usp=sharing).

[Initial state of the database](https://drive.google.com/file/d/1bNuBYdr4kFiRdxJXVuWBHgYCKm_-4vTz/view?usp=drive_link)

[Categories: GET, POST, PUT, DELETE](https://drive.google.com/file/d/1r9F5E-shKPW5jJ6RAoZl20oEjvkZCkZ7/view?usp=sharing)

[Products: GET, POST, PUT, DELETE](https://drive.google.com/file/d/1ep9doc80oh0ctnWnHPhr9keVKMtQjqgF/view?usp=sharing)

[Tags: GET, POST, PUT, DELETE](https://drive.google.com/file/d/1dz_3uEsSfBOvrABMSWstG8HWkGjewH77/view?usp=sharing)

## Credits and notes for the graders

I would like to thank my Northwestern Bootcamp instructor, [NikkiTheBugSlayer](https://github.com/NikkiTheBugSlayer) for her exceptional investments to ensure our cohort is able to understand and learn the concepts taught during this coursework. and our teaching assistants for your exceptional support! _Thank-you._

Grading team: I appreciate and look forward to your feedback!
