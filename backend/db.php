
<?php

// Sending errors to the browser if any

ini_set("display_errors",1);
error_reporting(E_ALL);

// Include the function from env.php

require_once __DIR__ .'/env.php';

$path =  __DIR__ . '/../.env';

// Load environmental variable from the .env file

loadEnv($path);
  
// Retrieve DB credentials from environment 

$host = getenv('DB_HOST');
$user = getenv('DB_USER');
$pass = getenv('DB_PASS');
$name = getenv('DB_NAME');

// Connection to MariaDB database

$connection = mysqli_connect($host, $user,$pass, $name);

// Checking the conncection

if (!$connection) {
die('Connection Error: ' . mysqli_connect_error() );
}

echo'Connected Successfully';


?> 