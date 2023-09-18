<?php

include("config.php");
$rating = $_POST["rating"];
$comment = $_POST["comment"];

$sql = "INSERT INTO `review` (`review`, `comment`) VALUES ('$rating', '$comment')";
$result = mysqli_query($conn, $sql);
if($result){
    echo "Your data has been submitted successfully. Thanks for your valuable review.";
}

?>