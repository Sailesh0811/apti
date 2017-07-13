<?php
require 'dbconfig.php';
$query="select qurl from test where testid='sas'";
$result=mysqli_query($connection,$query);
$row= $result->fetch_assoc();
$csvData = file_get_contents("upload/".$row['qurl']);
$lines = explode(PHP_EOL, $csvData);
$array = array();
foreach ($lines as $line) {
    $array[] = str_getcsv($line);
}

echo json_encode($array);	
?>