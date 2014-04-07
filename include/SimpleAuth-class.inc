<?php

/***************************************************************************
 * SimpleAuth: Simplified Authentication class.
 * To handle login sessions and access control.
 * Require: PDO DB-class
 *
 * Created by Johan Angelstam 2014.
 */
class SimpleAuth
{
	private $user_id = 0;
	private $userinfo = Array();
	private $loginok = false;
	private $error = false;
	
	function __construct()
	{
		$this->loginCheck();
	}
	
	function loginCheck()
	{
		global $db;
		
		if ($this->loginok)
		{
			return true;
		}
		elseif (isset($_SESSION['user_id']) && $_SESSION['user_id'] > 0)
		{
			$this->user_id = $_SESSION['user_id'];
			$this->userinfo = $_SESSION['userinfo'];
			$this->loginok = true;
			return true;
		}

		$this->user_id = 0;
		return false;
	}
	
	function getUserID()
	{
		return $this->user_id;
	}

	function getUserInfo()
	{
		return $this->userinfo;
	}

	function login($username, $password)
	{
		global $db;

		$result = $db->prepare("
			SELECT
				*
			FROM
				users
			WHERE
				username = :username
			");
		$result->bindParam(':username', $username, PDO::PARAM_STR);
		$result->execute();

		if ($db->query('SELECT FOUND_ROWS()')->fetchColumn() > 0)
		{
			$userinfo = $result->fetchObject();

			if ($userinfo->password == $password)
			{
				$_SESSION['user_id'] = $userinfo->user_id;
				$_SESSION['userinfo'] = Array("user_id"=>$userinfo->user_id, "username"=>$userinfo->username);

				return $_SESSION['userinfo'];
			}
		}

		return false;
	}
	
	function logout()
	{
		$_SESSION['user_id'] = 0;
		unset($_SESSION['user_id']);
		unset($_SESSION['userinfo']);
		$this->user_id = 0;
	}
}

?>