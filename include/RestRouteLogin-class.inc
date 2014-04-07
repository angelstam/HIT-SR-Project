<?php

require_once("RestRoute-class.inc");
require_once("SimpleAuth-class.inc");

/**
 * RestRouteLogin:
 */
class RestRouteLogin extends RestRoute
{
	function get($p)
	{
		if (count($p) == 0)
		{
			return $this->getLoginStatus();
		}
		return false;
	}

	function put($p, $data)
	{
		if (count($p) == 0)
		{
			return $this->doLogin($data);
		}
		return false;
	}

	private function getLoginStatus()
	{
		$auth = new SimpleAuth();
		
		return $auth->getUserInfo();
	}

	private function doLogin($data)
	{
		global $db;

		$auth = new SimpleAuth();
		$result = $auth->login($data->username, $data->password);

		if ($result === false)
		{
			return new RestServiceError("ERROR: Unable to login!");
		}
		else
		{
			return $result;
		}
	}
}

?>