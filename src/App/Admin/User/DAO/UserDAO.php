<?php

namespace App\Admin\User\DAO;

use Silex\Application;
use App\Admin\User\Domain\User;

/**
 * Class UserDAO
 * @author Zakaria Othmane
 */
class UserDAO
{

  /**
   * @return User
   */
  public function buildDomainObject(array $userArray) : User
  {
    $user = new User();
    $user->setUser_name($userArray['user_name']);
    $user->setUser_first_name($userArray['user_first_name']);
    $user->setMail($userArray['mail']);
    $user->setPassword($userArray['password']);
    return $user;
  }
}
