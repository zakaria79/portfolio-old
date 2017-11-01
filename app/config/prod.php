<?php

$app['db.options'] = array(
  'driver'   => 'pdo_mysql',
  'charset'  => 'utf8',
  'host' => 'localhost',
  'port'     => '3306',
  'dbname' => 'portfolio',
  'user' => 'root',
  'password' => ''
);

$app['user_admin'] = array(
  'mail' => 'zakaria@gmail.com',
  // Password : zakaria
  'password' => '$2y$10$KM/HkJenwj7yViiP1vNfi.1lTJRHaZa.Yc2hcR3BNqNhbAOdSwAlW',
  'user_name' => 'Othmane',
  'user_first_name' => 'Zakaria'
);

// $app['debug'] = true;
$app['monolog.level'] = 'INFO';
