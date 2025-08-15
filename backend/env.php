<?php

// Loads environmental variables from a given .env file into PHP's environment
function loadEnv($path) {  
    // If no path stop the execution

    if(!file_exists($path)) return;

    // Read the file line by line and ignore empty lines

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    foreach($lines as $line) {

        // Skip the comments

        if(strpos(trim($line),"#") === 0) continue;
        list($name, $value) = explode("=", $line,2);
        putenv(trim($name) ."=". trim($value));
}
}

?>




