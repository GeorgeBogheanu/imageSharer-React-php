<?php
header("Access-Control-Allow-Headers: Content-Type");
error_log("Script executed");
include("dbConnect.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['postId'])) {
        $postId = (int)$_POST['postId'];
        error_log("Received postId: " . $postId);

        $stmt = $conn->prepare("UPDATE posts SET likes_count = IFNULL(likes_count, 0) + 1 WHERE id = ?");
        $stmt->bind_param("i", $postId);

        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Update successful', 'postId' => $postId]);
        } else {
            echo json_encode(['success' => false, 'error' => $stmt->error, 'message' => 'Error updating likes_count', 'postId' => $postId]);
            error_log("Error executing update query: " . $stmt->error);
        }

        $stmt->close();
    } else {
        echo json_encode(['success' => false, 'error' => 'postId not set', 'message' => 'Error updating likes_count']);
        error_log("Error: 'postId' not set in the request");
    }

    mysqli_close($conn);
}
?>