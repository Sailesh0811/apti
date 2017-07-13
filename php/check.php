<?php
require 'dbconfig.php';
$type=$_POST['type'];
$value=$_POST['value'];
$query="SELECT * FROM student where`{$type}`='$value'";
$result=mysqli_query($connection,$query);
$row = $result->fetch_assoc();
echo json_encode($row['name']);
?>