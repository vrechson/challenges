<?php

# echo "this isn't part of the challenge";

function report_to_admin($url) {
    $ch = curl_init();
    $fields = [
        'url' => $url,
        'secret' => "what-kindwfvsdfdfgregrgh"
    ];
    $fields_string = http_build_query($fields);
    
    curl_setopt($ch, CURLOPT_URL, "http://ademir:3000/add-83ydsedeeeew");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);

    curl_exec($ch);

    echo "thanks for your report!";
}