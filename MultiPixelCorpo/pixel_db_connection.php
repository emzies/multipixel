<?php
$hostname = 'localhost';
$username = 'root';
$password = ''; 
$database = 'pixel_contact'; 

try {
    $conn = new PDO("mysql:host=127.0.0.1;dbname=$database", $username, $password);

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}

