<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(
    '*' => array(
        // ...
    ),

    'ontherocks.dev' => array(
        // ...
		'devMode'  => true,
        'environmentVariables' => array(
            //'basePath' => '/users/brandon/Sites/example.dev/public/',
            
            'baseUrl'  => 'http://ontherocks.dev/'
        )
    ),

    '216.243.141.194' => array(
        // ...
        'devMode' => true,
        'environmentVariables' => array(
            //'basePath' => '/storage/av12345/www/public_html/',
            'baseUrl'  => 'http://216.243.141.194',
        )
    )
);