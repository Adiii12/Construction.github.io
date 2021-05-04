<?php
 $serverName = "localhost";
 $username = "root";
 $password ="";

 $conn = mysqli_connect($serverName,$username,$password);
 if(!$conn){
 die("sorry we failed to connect : " . mysqli_connect_error());
 }else{
     echo "connection successful";
 }
?>