<?php
$csvData = file_get_contents('hi.csv');
$lines = explode(PHP_EOL, $csvData);
$array = array();
foreach ($lines as $line) {
    $array[] = str_getcsv($line);
}
print_r($array);

?>