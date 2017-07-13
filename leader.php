<?php
require 'php/dbconfig.php';
?>
<!DOCTYPE html>
<html>
<head>
	<title>	LeaderBoard</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
	<script src="https://unpkg.com/vue/dist/vue.js"></script>	
	
</head>
<body>
<div class="container">
	<?php
	
	echo '<table class="table"><tr><th>S.No</th><th>Participants</th><th>Score</th></tr><tbody>';
	$query="select * from marks order by mark desc ";
	$result=mysqli_query($connection,$query);
	$row=mysqli_fetch_assoc($result);$j=1;
        for($i=0;$i<mysqli_num_rows($result);$i++){
        
        echo "<tr scope='row' >";
        echo "<td>".$j."</td>";
        echo "<td>".$row['name']." , ".$row['name2']."</td>";
        echo "<td>".$row['mark']."</td>";       
        $row=mysqli_fetch_assoc($result);
        echo "</tr>";$j++;
		}

	echo '</tbody></table>'
	?>
</div>
	<script type="text/javascript" src="js/leaderboard.js"></script>
</body>
</html>