<?php
require 'dbconfig.php';
$name=$_POST['name'];$regno=$_POST['regno'];$password="acesocsastra";$regno2=$_POST['regno2'];$name2=$_POST['name2'];
$query="select * from user where regno='$regno' or regno2='$regno2'";
$result=mysqli_query($connection,$query);
if($result->num_rows>0){
	echo json_encode("error");
}
else{

$query="insert into user (name,regno,name2,regno2,password) values ('$name','$regno','$name2','$regno2','$password')";
if($result=mysqli_query($connection,$query)){
	$last_id = mysqli_insert_id($connection);
	echo json_encode($last_id);
}
}

?>