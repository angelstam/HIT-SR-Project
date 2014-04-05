<?php

require_once("RestRoute-class.inc");
require_once("SimpleAuth-class.inc");

/**
 * RestRouteLogout:
 */
class RestRouteLogout extends RestRoute
{
	function put($p, $data)
	{
		if (count($p) == 0)
		{
			return $this->doLogout($data);
		}
		return false;
	}

	private function doLogout($data)
	{
		global $db;

		$auth = new SimpleAuth();
		$result = $auth->logout();

		return true;
	}
}

?>