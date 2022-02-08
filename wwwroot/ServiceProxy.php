<?php
    $url = $_GET["url"];
    $json = file_get_contents($url);
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: text/json');
    echo $json;
?>