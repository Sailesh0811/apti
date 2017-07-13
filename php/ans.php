<?php
require 'dbconfig.php';
$query="select aurl from test where testid='sas'";
$result=mysqli_query($connection,$query);
$row= $result->fetch_assoc();
$s="answer/"+$row['aurl'];
$csvData = file_get_contents("answer/".$row['aurl']);
$lines = explode(PHP_EOL, $csvData);
$array = array();
foreach ($lines as $line) {
    $array[] = str_getcsv($line);
}

echo json_encode($array);	
?>