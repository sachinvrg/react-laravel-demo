##This is the demo project developed using React JS + Laravel 8

#Setting up the Development Environment

Please install the following on your system (Windows/Mac/Ubuntu)

1. PHP 7.3 or higher 
2. Mysql 5.6 or higher
3. Node v12.9.0
4. NPM v6.10.2 (comes with node v12.9.0)

#Web server 
Apache or Nginx

#Installation

1. git clone https://github.com/sachinvrg/react-laravel-demo.git
2. cd react-laravel-demo
3. run 'composer install' command to install required dependencies to run Laravel setup
4. Create a MySQL database  
5. Open '.env' file and update the database connection configuration (DB_DATABASE, DB_USERNAME, DB_PASSWORD)
6. run 'php artisan migrate' command to create database tables 
7. run 'php artisan serve' command to start server 
8. visit "http://127.0.0.1:8000" in browser, it should show default Laravel page. 

#setup front end 
1. open new terminal and go to project root directory 
2. go to 'frontend' directory and run "npm install" command to install node module
3. Open "frontend\src\Functions\Const.js" and update the value of BASE_URL (if you're running setup at localhost, no need to update it's value)
4. run 'npm start' command and open "http://localhost:4050" in browser 