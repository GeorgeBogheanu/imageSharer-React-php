<?php
include('dbConnect.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $description = mysqli_real_escape_string($conn, $_POST['description']);
    $image = $_FILES['image'];
    $imageName = $image['name'];
    $imageTemp = $image['tmp_name'];

    $uploadDir = 'uploads';
    $encodedImageName = str_replace('#', '%23', urlencode($imageName));
    $uploadImg = $uploadDir . "/" . $encodedImageName;

    // create the directory if its not already created
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $imageType = exif_imagetype($imageTemp);
    $allowedImageTypes = [IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_GIF];
    // check the image type
    if (in_array($imageType, $allowedImageTypes)) {
        // check if the directory is writable
        if (is_writable($uploadDir)) {
            $sql = "INSERT INTO posts(name, description, image) 
                VALUES('$name', '$description', '$uploadImg')";

            if (mysqli_query($conn, $sql)) {
                //if the query was succesful try to move the file
                if (move_uploaded_file($imageTemp, $uploadImg)) {
                    echo "File moved successfully.";
                    echo "success";
                } else {
                    echo "Error moving file: " . $_FILES['image']['error'];
                    error_log("Error moving file: " . $_FILES['image']['error']);
                    error_log("Destination: " . $uploadImg);
                    error_log("Image Temp: " . $imageTemp);
                }
            } else {
                echo "<h3>Failed to insert data into the database!</h3>";
                echo "<p>Error: " . mysqli_error($conn) . "</p>";
            }
        } else {
            echo 'Upload directory is not writable.';
        }
    } else {
        echo "Invalid file type.";
    }
    
    mysqli_close($conn);
}
?>

