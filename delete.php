<?php

    header("Access-Control-Allow-Origin: *");
    require "connect.php";
    $con = new Connect();
    $con->delete($_POST["id"]);