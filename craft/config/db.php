<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */
/*
return array(

	// The database server name or IP address. Usually this is 'localhost' or '127.0.0.1'.
	'server' => 'localhost',

	// The database username to connect with.
	'user' => 'icg-craft-TWO',

	// The database password to connect with.
	'password' => 'icg-craft-TWO',

	// The name of the database to select.
	'database' => 'icg-craft-TWO',

	// The prefix to use when naming tables. This can be no more than 5 characters.
	'tablePrefix' => 'craft',

);*/
return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),
    'ontherocks.dev' => array(
        'server' => 'localhost',
        'user' => 'icg-craft-TWO',
        'password' => 'icg-craft-TWO',
        'database' => 'icg-craft-TWO',
    ),
    '216.243.141.194' => array(
        'server' => 'localhost',
        'user' => 'av02539',
        'password' => 'exBv6fJi.LE7V',
        'database' => 'av02539icg-Craft',
    ),
);