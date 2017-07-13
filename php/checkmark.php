<?php
session_start();
require 'dbconfig.php';

$regno=$_SESSION['regno'];

$query="SELECT * FROM marks where regno='$regno' or regno2='$regno'";
$result=mysqli_query($connection,$query);
	$row=mysqli_fetch_assoc($result);
        if(mysqli_num_rows($result)==1){
        	echo false	;
        }
        else {	
        	echo true;
        }

?>