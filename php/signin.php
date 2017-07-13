<?php
require 'dbconfig.php';
$regno=$_POST['regno'];$password=$_POST['password'];
$query="select * from user where (regno='$regno' or regno2='$regno') and password='$password'";
$result=mysqli_query($connection,$query);
if($result->num_rows==1){
	$query="select * from marks where regno='$regno'";
	$result=mysqli_query($connection,$query);
if($result->num_rows>0){
	echo json_encode("Error");
}else{
	session_start();
	$_SESSION['regno']=$regno;
	echo json_encode("success");

}
}
else{
	echo json_encode("error");
}


?>