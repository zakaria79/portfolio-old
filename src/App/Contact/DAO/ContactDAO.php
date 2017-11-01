<?php

namespace App\Contact\DAO;

use App\Contact\Domain\Contact;
use DAO\DAO;
use Silex\Application;

/**
 * Class ContactDAO
 * @author Othmane Zakaria
 */
class ContactDAO extends DAO
{

  /**
   * @param Application $app
   */
  public function __construct(Application $app)
  {
    parent::__construct($app);
  }

  /**
   * save user contact informations
   *
   * @return void
   * @param contact data
   */
  public function save(Contact $contact)
  {
    $bdd = $this->getBdd();
    $sql = 'INSERT INTO contact (mail, firstname, name, message, tel, date_creation) VALUES (:email,:firstname, :lastname, :message, :tel, NOW())';
    $query = $bdd->prepare($sql);
    $query->bindValue(':email', $contact->getEmail());
    $query->bindValue(':firstname', $contact->getFirstname());
    $query->bindValue(':lastname', $contact->getLastname());
    $query->bindValue(':message', $contact->getMessage());
    $query->bindValue(':tel', $contact->getTel());
    $query->execute();
  }

  /**
   * Retourne la liste des messages
   *
   * @return list of user infos contact
   */
  public function findAll()
  {
    $bdd = $this->getBdd();
    $sql = "SELECT * FROM contact ORDER BY date_creation DESC";
    $query = $bdd->prepare($sql);
    $query->execute();
    return $query->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * undocumented function
   *
   * @return void
   */
  public function buildDomainObject(array $contactArray)
  {
    $contact = new Contact();
    $contact->setLastname($contactArray['lastname']);
    $contact->setFirstname($contactArray['firstname']);
    $contact->setEmail($contactArray['email']);
    $contact->setTel($contactArray['tel']);
    $contact->setMessage($contactArray['message']);
    return $contact;
  }

  /**
   * Make an array from Contact object
   *
   * @return array
   */
  public function makeArrayFromObject(Contact $contact)
  {
    $contactArray = array();
    $contactArray['name'] = $contact->getName();
    $contactArray['firstname'] = $contact->getFirstname();
    $contactArray['mail'] = $contact->getMail();
    $contactArray['tel'] = $contact->getTel();
    $contactArray['message'] = $contact->getMessage();
    $contactArray['date_creation'] = $contact->getDate_creation();
    if ($contact->getId()) {
      $res['id'] = $contact->getId();
    }
    return $contactArray;
  }
}
