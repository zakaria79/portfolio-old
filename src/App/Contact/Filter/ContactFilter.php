<?php

namespace App\Contact\Filter;

use Filter\FilterManager;

/**
 * Class EventFilter
 * @author Zakaria Othmane
 */
class ContactFilter extends FilterManager
{

  /**
   * @param array $data
   */
  public function __construct($data)
  {
    parent::__construct($data);
  }

  public function getArgs () {
    return array(
      'email' => FILTER_VALIDATE_EMAIL,
      'firstname' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
      'lastname' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
      'message' => FILTER_SANITIZE_FULL_SPECIAL_CHARS,
      'tel' => array(
        'filter' => FILTER_CALLBACK,
        'options' => array(
          $this, 'filter_format_tel'
        )
      ),
    );
  }
}
