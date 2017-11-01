<?php

namespace App\Admin\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\{ Response, Request };
use App\Filter\ContactFilter;
use App\Admin\User\Filter\UserFilter;

class AdminController {

  public function AdminAction(Application $app)
  {
    if ($app['session']->get('user') !== null && $app['session']->get('user')->isAuthenticated()) {
      try {
        $contactArray = $app['dao.contact']->findAll();
        return $app['twig']->render('Admin/admin.html.twig', array(
          'messages' => $app['dao.contact']->findAll()
        ));
      } catch (\Exception $e) {
         // return new Response($e->getMessage(), 500);
        return new Resonse('Un problème est survenu lors de la requête vers le serveur', 500);
      }
    }
    return $app->redirect($app['url_generator']->generate('login'));
  }

	/**
	 * Vérifie le formulaire de connexion
	 *
	 * @return
	 */
  public function loginCheckAction(Application $app, Request $request)
  {
    if (!empty($request->request->all())) {
      $userFilter = new UserFilter($request->request->all());
      $filtredData = $userFilter->getFiltredData();
      if ($filtredData['mail'] === $app['user_admin']['mail'] && \password_verify($filtredData['password'], $app['user_admin']['password'])) {
        $app['session']->set('user', $app['dao.user']->buildDomainObject($app['user_admin']));
        $user = $app['session']->get('user')->setIsAuthenticated(true);
        return $app->redirect('admin');
      }
      $app['session']->set('error_login_message', 'Les indentifiants ne correspondent à aucun compte');
      return $app->redirect('login');
    }
	}

	/**
	 * Déconexion
	 *
	 * @return
	 */
	public function logoutAction(Application $app)
	{
		$app['session']->set('user', null);
		return $app->redirect($app['url_generator']->generate('home', array('page' => 'home')));
	}
}
