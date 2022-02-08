<?php
    $apikey = $_GET["id"];
    $lat = $_GET["lat"];
    $lng = $_GET["lng"];
    $url = "https://api.darksky.net/forecast/$apikey/$lat,$lng?exclude=minutely,hourly,daily,alerts,flags&lang=ja";
    $json = file_get_contents($url);
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: text/json');
    echo $json;
?>