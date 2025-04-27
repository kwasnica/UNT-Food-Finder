
<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','db_connect');

// get the post records
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$password = $_POST['password'];

// database call procedure to add user to table

$sql = "CALL proc_insert_user('$firstName','$lastName','$email','$password')";
// insert in database
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Account Created";
}


?>

