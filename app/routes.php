<?php

// Formulaire de concact du portfolio
$app->post('/contact', "App\Contact\Controller\ContactController::contactAction")->bind('contact');
// Formulaire de connexion
$app->get('/login', "App\Controller\AppController::loginAction")->bind('login');

// Url de déconnexion
$app->get('/admin/logout', "App\Admin\Controller\AdminController::logoutAction")->bind('logout');

// Vérifie les indentifiants pour la connexion
$app->post('/logincheck', "App\Admin\Controller\AdminController::loginCheckAction")->bind('login_check');

// Administration du siste
$app->get('/admin', "App\Admin\Controller\AdminController::AdminAction")->bind('admin');

/* *  Portfolio "home" par defaut * */
$app->get('/{page}', "App\Controller\AppController::indexAction")->bind('home')->assert('page','home|realisations|apropos|contact|');
