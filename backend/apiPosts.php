<?php
    include('dbConnect.php');
    $sql = "SELECT * FROM posts";
    $result = mysqli_query($conn, $sql);
    $response = array();
    if($result){
        header('Content-Type: application/json');
        $i=0;
        while($row= mysqli_fetch_assoc($result)){
            $response[$i]['id'] = $row['id'];
            $response[$i]['image'] = $row['image'];
            $response[$i]['name'] = $row['name'];
            $response[$i]['description'] = $row['description'];
            $response[$i]['likes_count'] = $row['likes_count'];
            $i++;
        }
        echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }

?>
