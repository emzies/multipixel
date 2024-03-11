<?php

include 'pixel_db_connection.php';

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$contactno = $_POST['contactno'];
$email = $_POST['email'];
$message = $_POST['message'];

try {
    $stmt = $conn->prepare("INSERT INTO contact_form (firstname, lastname, contactno, email, message) VALUES (?, ?, ?, ?, ?)");

    $stmt->bindParam(1, $firstname);
    $stmt->bindParam(2, $lastname);
    $stmt->bindParam(3, $contactno);
    $stmt->bindParam(4, $email);
    $stmt->bindParam(5, $message);

    $stmt->execute();
    
    $response['success'] = true;
    $response['message'] = "Message sent successfully";
} catch(PDOException $e) {
    $response['success'] = false;
    $response['message'] = "Error: " . $e->getMessage();
}

header('Content-Type: application/json');
echo json_encode($response);

$stmt = null;
