<?php
session_start();
if(isset($_SESSION['regno'])){
	echo json_encode("true");
}
else{
	echo json_encode("false");
}
?>