<?php
require 'dbconfig.php';
$name=$_POST['name'];$regno=$_POST['regno'];$password=$_POST['password'];
$query="select * from admin where admin='$regno' and password='$password'";
$result=mysqli_query($connection,$query);
if($result->num_rows==1){
	session_start();
	$_SESSION['admin']=$regno;
	echo json_encode("success");

}
else{
	echo json_encode("error");
}


?>