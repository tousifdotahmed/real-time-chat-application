<?php
    session_start();
    include_once "config.php";

    $outgoing_id = $_SESSION['unique_id'];
    $searchTerm = mysqli_real_escape_string($conn, $_POST['searchTerm']);

    $sql = mysqli_query($conn, "SELECT * FROM users WHERE NOT unique_id={$outgoing_id} AND(fname LIKE '%{$searchTerm}%' OR lname LIKE '%{$searchTerm}%')");
    $output = "";
    //$query = mysqli_query($conn, $sql);
    if(mysqli_num_rows($sql) > 0){
        include_once "data.php";
    }else{
        $output .= 'No user found related to your search term';// if there are no user then we'll show no users found
    }
    echo $output;
?>