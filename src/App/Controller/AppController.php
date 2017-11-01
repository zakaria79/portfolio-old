<?php 

namespace App\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\{ Response, Request };
use Filter\FilterManager;

class AppController {

  /**
   * Home page controller.
   *
   * @param Application $app Silex application 
   */
  public function indexAction(Application $app) {
    return $app['twig']->render('index.html.twig');
  }

  /**
   * Affiche le formulaire de connexion
   *
   * @return 
   */
  public function loginAction(Application $app)
  {
    $error_message = $app['session']->get('error_login_message');
    $app['session']->set('error_login_message', null);
    return $app['twig']->render('login.html.twig', array(
      'error_message' => $error_message
    ));
  }

}
