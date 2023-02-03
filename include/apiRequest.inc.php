<?php


if(isset($_GET['url'])) {
    $link = $_GET['url'];
}

if(!filter_var($link, FILTER_VALIDATE_URL)) {
    echo "err";
    return false;
}

$ch = curl_init(); 

$url = 'https://api.shrtco.de/v2/shorten?url=' . $link;

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$data = curl_exec($ch);

curl_close($ch);

echo $data;
