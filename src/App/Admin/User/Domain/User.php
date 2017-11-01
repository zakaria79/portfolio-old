<?php

namespace App\Admin\User\Domain;

use App\Admin\User\Exception\InvalideUserDataException;

/**
 * Class User
 * @author Zakaria Othmane
 */
class User
{
  private $user_name;
  private $user_first_name;
  private $password;
  private $isAuthenticated = false;

  /**
   * Getter for user_name
   *
   * @return string
   */
  public function getUser_name() : string
  {
      return $this->user_name;
  }
  
  /**
   * Setter for user_name
   *
   * @param string $user_name
   * @return User
   */
  public function setUser_name(string $user_name) : User
  {
    if ($user_name) {
      $this->user_name = $user_name;
      return $this;
    }
    throw new InvalideUserDataException('Nom de l\'utilisateur invalide');
  }

  /**
   * Getter for user_first_name
   *
   * @return string
   */
  public function getUser_first_name() : string
  {
      return $this->user_first_name;
  }
  
  /**
   * Setter for user_first_name
   *
   * @param string $user_first_name
   * @return User
   */
  public function setUser_first_name(string $user_first_name) : User
  {
    if ($user_first_name) {
      $this->user_first_name = $user_first_name;
      return $this;
    }
    throw new InvalideUserDataException('Prénom d\'utilisateur invalide');
  }

  /**
   * Getter for mail
   *
   * @return string
   */
  public function getMail() : string
  {
      return $this->mail;
  }
  
  /**
   * Setter for mail
   *
   * @param string $mail
   * @return User
   */
  public function setMail(string $mail) : User
  {
    if ($mail) {
      $this->mail = $mail;
      return $this;
    }
      throw new InvalideUserDataException('Adresse mail invalide');
  }

  /**
   * Getter for password
   *
   * @return string
   */
  public function getPassword() : string
  {
      return $this->password;
  }
  
  /**
   * Setter for password
   *
   * @param string $password
   * @return User
   */
  public function setPassword(string $password = null) : User
  {
    if ($password) {
      $this->password = $password;
      return $this;
    }
  }

  /**
   * Getter for isAuthenticated
   *
   * @return bool
   */
  public function IsAuthenticated()
  {
    return $this->isAuthenticated;
  }

  /**
   * Setter for isAuthenticated
   *
   * @param bool $isAuthenticated
   * @return User
   */
  public function setIsAuthenticated(bool $isAuthenticated) : User
  {
    $this->isAuthenticated = $isAuthenticated;

    return $this;
  }
}
