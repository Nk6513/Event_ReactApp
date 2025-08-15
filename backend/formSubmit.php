<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle OPTIONS preflight request:
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Enable error reporting for debugging

 ini_set('display errors', 1);
 error_reporting(E_ALL);

// Checking POST request

if($_SERVER["REQUEST_METHOD"] === "POST") {

    // Get form values

    $username = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    echo 'THANK YOU ' . htmlspecialchars($username) . ' We have received your data';

} else {

    http_response_code(405); // Method not allowed
    echo 'Only POST requests are allowed';
}





?>