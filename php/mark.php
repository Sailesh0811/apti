<?php
require 'dbconfig.php';
session_start();
$regno=$_SESSION['regno'];
$marks=$_POST['mark'];
$query="select * from user where regno = '$regno' or regno2='$regno' ";
$result=mysqli_query($connection,$query);
$row=mysqli_fetch_assoc($result);
$name=$row['name'];
$name2=$row['name2'];
$regno2=$row['regno2'];
$regno=$row['regno'];
$query = "select count(*) as count from marks where regno = '$regno'";
$result = mysqli_query($connection,$query);
$row = mysqli_fetch_assoc($result);
if($row["count"] > 0)
{
	echo "success";
}
else
{

$query="insert into marks (mark,regno,regno2,name,name2) values ('$marks','$regno','$regno2','$name','$name2')";
if($result=mysqli_query($connection,$query)){
	echo "success";
}
else{
	echo "error";
}

}
?>