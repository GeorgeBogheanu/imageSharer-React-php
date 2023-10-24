<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "websitedb";
    $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

    if(!$conn){
        http_response_code(500); 
        echo json_encode(array('error' => 'Database connection failed'), JSON_PRETTY_PRINT);
        die();
    } 
?>