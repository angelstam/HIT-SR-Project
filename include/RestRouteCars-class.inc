<?php

require_once("RestRoute-class.inc");

/**
* RestRouteCars:
*/
class RestRouteCars extends RestRoute
{
	function get($p)
	{
		if (count($p) == 0)
		{
			return $this->getCars();
		}
		return false;
	}

	private function getCars()
	{
		global $db;

		$result = $db->query("
			SELECT
				*
			FROM
				cars
			");

		return $result->fetchAll(PDO::FETCH_ASSOC);
	}
}

?>