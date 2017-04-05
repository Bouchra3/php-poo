<?php

    header("Access-Control-Allow-Origin: *");
    require "connect.php";
    $con = new Connect();
    $con->update($_POST["id"],$_POST["nom"],$_POST["prenom"],$_POST["post"]);