<?php

    header("Access-Control-Allow-Origin: *");
    require "connect.php";
    // $con = new Connect();
    // if(isset($_POST["id"]))
    //     echo json_encode($con->read($_POST["id"]));
    // else 
    //     echo json_encode($con->readAll());

    if(isset($_POST["id"])){
        $con = new Connect();
        echo json_encode($con->read($_POST["id"]));
    }else 
        echo json_encode(Connect::readAllStatic());