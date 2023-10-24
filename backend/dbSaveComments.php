<?php
    include('dbConnect.php');

    if($_SERVER['REQUEST_METHOD']==='POST'){
        $name = mysqli_real_escape_string($conn, $_POST['name']);
        $country = mysqli_real_escape_string($conn, $_POST['country']);
        $description = mysqli_real_escape_string($conn, $_POST['description']);
        $postId = (int)$_POST['postId'];
        
        $sql = "INSERT INTO comments(name, country, description, post_id) 
                VALUES ('$name','$country', '$description', '$postId')";
        try{
            mysqli_query($conn, $sql);
            echo json_encode(array('status' => 'Success'));
            echo "Success";
        }
        catch( Exception $e){
            echo "Fail! Error: " . $e->getMessage();
        }
        mysqli_close($conn);
    }
    
?>