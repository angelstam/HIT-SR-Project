<?php

require_once("RestRoute-class.inc");

/**
* RestRouteSignUp:
*/
class RestRouteSignUp extends RestRoute
{
	function put($p, $data)
	{
		if (count($p) == 0)
		{
			return $this->doSignUp($data);
		}
		return false;
	}

	private function doSignUp($data)
	{
		global $db;

		$result = $db->prepare("
			INSERT INTO
				users
			SET
				username = :username,
				password=:password
			");
		$result->bindParam(':username', $data->username, PDO::PARAM_STR);
		$result->bindParam(':password', $data->password, PDO::PARAM_STR);
		$result->execute();

		return "OK";
	}
}

?>