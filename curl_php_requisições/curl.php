<?php

$curl = curl_init();

$headers = [
    'Content-Type: application/json'
];

$post = [
    'name'      => 'Joaquim Teixeira',
    'email'     => 'joaquim.teixeira@gmail.com',
    "password"  => "joka@123",
	"phone"     => null
];

$json = json_encode($post);

curl_setopt_array($curl, [
    CURLOPT_URL             => 'localhost:3001/user',
    CURLOPT_CUSTOMREQUEST   => 'POST',
    CURLOPT_RETURNTRANSFER  => true,
    CURLOPT_HTTPHEADER      => $headers,
    CURLOPT_POSTFIELDS      => $json
]);

$response = curl_exec($curl);

curl_close($curl);

echo $response;