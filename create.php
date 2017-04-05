<?php

    header("Access-Control-Allow-Origin: *");
    require "connect.php";
    $con = new Connect();
    echo $con->insert($_POST["nom"],$_POST["prenom"],$_POST["post"]);


