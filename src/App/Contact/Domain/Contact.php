<?php

namespace App\Contact\Domain;

use App\Contact\Exception\InvalidFieldContactException;
                                
/**
 * Class Contact
 * @author Othmane Zakaria
 */
class Contact
{
  private $contact_Id;
  private $firstname;
  private $lastname;
  private $email;
  private $tel;
  private $message;
  private $date_creation;

  /**
   * Getter for id
   *
   * @return int
   */
  public function getContact_Id() : int
  {
    return $this->contact_Id;
  }

  /**
   * Setter for id
   *
   * @param int $id
   * @return Contact
   */
  public function setContact_Id(int $contact_Id) : Contact
  {
    if ($contact_Id) {
      $this->contact_Id = $contact_Id;
      return $this;
    }
  }

  /**
   * Getter for firstname
   *
   * @return string
   */
  public function getFirstname() : string
  {
    return $this->firstname;
  }

  /**
   * Setter for firstname
   *
   * @param string $firstname
   * @return Contact
   */
  public function setFirstname(string $firstname) : Contact
  {
    if ($firstname) {
      $this->firstname = $firstname;
      return $this;
    }
    throw new InvalidFieldContactException('Champs prénom invalide');
  }

  /**
   * Getter for name
   *
   * @return string
   */
  public function getLastname() : string
  {
    return $this->lastname;
  }

  /**
   * Setter for name
   *
   * @param string $name
   * @return Contact
   */
  public function setLastname(string $lastname) : Contact
  {
    if ($lastname) {
      $this->lastname = $lastname;
      return $this;
    }
    throw new InvalidFieldContactException('Champs "Nom" invalide');
  }

  /**
   * Getter for mail
   *
   * @return string
   */
  public function getEmail() : string
  {
    return $this->email;
  }

  /**
   * Setter for email
   *
   * @param string $email
   * @return Contact
   */
  public function setEmail(string $email) : Contact
  {
    if ($email) {
      $this->email = $email;
      return $this;
    }
    throw new InvalidFieldContactException('Adresse mail invalide');
  }

  /**
   * Getter for tel
   *
   * @return string
   */
  public function getTel() : string
  {
    return $this->tel;
  }

  /**
   * Setter for tel
   *
   * @param string $tel
   * @return Contact
   */
  public function setTel(string $tel) : Contact
  {
    if ($tel) {
      $this->tel = $tel;
      return $this;
    }
    throw new InvalidFieldContactException('Numéro de téléphone invalide');
  }

  /**
   * Getter for message
   *
   * @return string
   */
  public function getMessage() : string
  {
    return $this->message;
  }

  /**
   * Setter for message
   *
   * @param string $message
   * @return Contact
   */
  public function setMessage(string $message) : Contact
  {
    if ($message) {
      $this->message = $message;
      return $this;
    }
    throw new InvalidFieldContactException('Champs "Message" invalide');
  }


  /**
   * Getter for date_creation
   *
   * @return string
   */
  public function getDate_creation() : string
  {
    return $this->date_creation;
  }

  /**
   * Setter for date_creation
   *
   * @param string $date_creation
   * @return Contact
   */
  public function setDate_creation(\DateTime $date_creation) : Contact
  {
    $this->date_creation = $date_creation;
    return $this;
  }
}
