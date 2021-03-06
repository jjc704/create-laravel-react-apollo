# Create Laravel React App

The objective for this project is to jump start building SPA application using React, GraphQL, Laravel and MaterialUI.
This project will demostrate how to integrate these technologies together to build a capable SPA application.

##PHP Composer Packages
* GraphQL - Reference: https://lighthouse-php.com/

## NPM Packages
* React
* Apollo Client
* Formik
* Material UI React
* Webpack

## Required installation
1) Git
2) NodeJs
3) PHP 7.2+
4) Composer
5) Database (mysql, sql server, etc see laravel.com for installation)
6) Webserver (Apache, Nginx, IIS, etc)

## Installation
1) Create directory. (ex: mkdir app && cd app)
2) Git clone "git clone https://github.com/jjc704/create-laravel-react-apollo.git . "
2) Run "composer update"
3) Run "npm update"
4) copy file .env.example to file .env.  
5) Install database if you don't have one. Please see laravel.com for more info.
6) Update .env with database information
7) Setup web application to /public directory or follow instructions on laravel.com
8) Run "php artisan key:generate" to generate key into the .env file
9) Run "php artsian cache:clear" to clear cache
10) Run "php artisan config:clear" to clear configuration
11) Run "php artisan migrate" to migrate local database
12) Run "npm run dev" to compile js and css assets to public directory
13) Start webserver and make sure point to web root to /public

## Guide to Unit Test with PHPunit
* Set path environment variable to point to php unit (windows: set PATH=%PATH%;C:\path-to-project\vendor\bin )
* Run "phpunit" 

## Testing Front End
* In this project we will test JS with Jest and Enzyme.  See "https://jestjs.io/en/"
* On Windows set PATH=%PATH%;C:\path-to-project\node_modules\.bin
* Read this on how to setup jest https://medium.freecodecamp.org/how-to-set-up-jest-enzyme-like-a-boss-8455a2bc6d56

## Great Links
https://github.com/stefanwille/blueprintjs-with-react