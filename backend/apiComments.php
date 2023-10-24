<?php
    include('dbConnect.php');
    $sql = "SELECT * FROM comments";
    $result = mysqli_query($conn, $sql);
    $response = array();
    if($result){
        header('Content-Type: application/json');
        $i=0;
        while($row= mysqli_fetch_assoc($result)){
            $response[$i]['id'] = $row['id'];
            $response[$i]['name'] = $row['name'];
            $response[$i]['country'] = $row['country'];
            $response[$i]['description'] = $row['description'];
            $response[$i]['datePosted'] = $row['date_posted'];
            $response[$i]['postId'] = $row['post_id'];
            $i++;
        }
        echo json_encode($response, JSON_PRETTY_PRINT);
    }

?>
