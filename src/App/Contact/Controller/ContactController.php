<?php

namespace App\Contact\Controller;

use Silex\Application;
use Symfony\Component\HttpFoundation\{ Response, Request };
use App\Contact\Filter\ContactFilter;

/**
 * Class ContactController
 * @author Zakaria Othmane
 */
class ContactController
{
  public function contactAction(Application $app, Request $request) {
    try {
      if (!empty($request->request->all())) {
        $contactFilter = new ContactFilter($request->request->all());
        $contactObject = $app['dao.contact']->buildDomainObject($contactFilter->getFiltredData());
        $app['dao.contact']->save($contactObject);
        $sujet = 'Important';
        $message = $app['twig']->render('Admin/mail.html.twig', array('contact' => $contactObject));
        $headers = 'MIME-Version: 1.0'."\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n";
        $headers .= 'To: TestName exemple@gmail.com'."\r\n";
        $headers .= 'From: exemple@gmail.com'."\r\n".'X-Mailer: PHP/'.phpversion();
        $to = 'exemple@gmail.com';
        $res = \mail($to, $sujet, $message, $headers); // Retourne un boolean
        return new Response('Le message a bien été envoyé', 200);
      }
      return new Response('Le formulaire est vide!', 400);

    } catch (InvalidFieldContactException $e) {
      // return new Response($e->getMessage(), 500);
      return new Resonse('Un problème est survenu lors de la requête vers le serveur', 500);
    }
  }
}
