<!DOCTYPE html>
<html>
<head>
	<title>Signin</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

	<script src="https://unpkg.com/vue/dist/vue.js"></script>
	
	<link rel="stylesheet" type="text/css" href="css/signin.css">
</head>
<body  >
<div id="signUp">

	<table width="600">
<form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post" enctype="multipart/form-data">
<tr>
<td>Test id:</td><td><input type="text" name="testid"></td>
</tr>
<tr>
<td width="20%">Select question</td>
<td width="80%"><input type="file" name="file" id="file" /></td>
</tr>

<tr>
<td>Submit</td>
<td><input type="submit" name="submit" /></td>
</tr>

</form>
</table>
<?php
require 'dbconfig.php';
if ( isset($_POST["submit"]) ) {

   if ( isset($_FILES["file"])) {

            //if there was an error uploading the file
        if ($_FILES["file"]["error"] > 0) {
            echo "Return Code: " . $_FILES["file"]["error"] . "<br />";

        }
        else {
                 //Print file details
             

                 //if file already exists
             if (file_exists("upload/" . $_FILES["file"]["name"])) {
            echo $_FILES["file"]["name"] . " already exists. ";
             }
             else {
              $testid=$_POST['testid'];
             $query="select * from test where testid='$testid'";
            	$result=mysqli_query($connection,$query);
if($result->num_rows>0){
	
}
else{
 $storagename = $_FILES["file"]["name"];
  move_uploaded_file($_FILES["file"]["tmp_name"], "upload/" . $storagename);
$query="insert into test (testid,qurl) values('$testid','$storagename')";
if($result=mysqli_query($connection,$query)){
	

             
        
                    //Store file in directory "upload" with the name of "uploaded_file.txt"
           header('Location:answer.php');
           
          
           

     } else {
             echo "No file selected <br />";
     }
}
}
}
}
}
?>

</div>

<script type="text/javascript" src="js/admin.js"></script>
</body>
</html>