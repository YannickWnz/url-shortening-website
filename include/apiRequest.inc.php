<?php


if(isset($_GET['url'])) {
    $link = $_GET['url'];
}

$ch = curl_init(); 

// $url = 'https://api.shrtco.de/v2/shorten?url=plasticandsave.com';
// $url = 'https://api.shrtco.de/v2/shorten?url=invalid';
$url = 'https://api.shrtco.de/v2/shorten?url=' . $link;

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$data = curl_exec($ch);

curl_close($ch);

// echo json_encode($data);

echo $data;

// var_dump($data);