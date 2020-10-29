##This is the demo project developed using React JS + Laravel 8

#Setting up the Development Environment

Please install the following on your system (Windows/Mac/Ubuntu)

> PHP 7.3 or higher 
> Mysql 5.6 or higher
> Node v12.9.0
> NPM v6.10.2 (comes with node v12.9.0)

#Web server 
Apache or Nginx

#Installation

> git clone https://github.com/sachinvrg/react-laravel-demo.git
> cd react-laravel-demo
> run 'composer install' command to install required dependencies to run Laravel setup
> Create a MySQL database  
> Open '.env' file and update the database connection configuration (DB_DATABASE, DB_USERNAME, DB_PASSWORD)
> run 'php artisan migrate' command to create database tables 
> run 'php artisan serve' command to start server 
> visit "http://127.0.0.1:8000" in browser, it should show default Laravel page. 

#setup front end 
> open new terminal and go to project root directory 
> go to 'frontend' directory and run "npm install" command to install node module
> Open "frontend\src\Functions\Const.js" and update the value of BASE_URL (if you're running setup at localhost, no need to update it's value)
> run 'npm start' command and open "http://localhost:4050" in browser 