<?php

require_once("RestRoute-class.inc");

/**
 * RestRouteAcceptBid:
 */
class RestRouteAcceptBid extends RestRoute
{
	function get($p)
	{
		if (count($p) == 0)
		{
			return $this->getBids();
		}
		return false;
	}

	/*function put($p, $data)
	{
		if (count($p) == 0)
		{
			return $this->placeBid($data);
		}
		return false;
	}*/

	private function getBids()
	{
		global $db;

		$result = $db->query("
			SELECT
				*
			FROM
				bids
			");

		return $result->fetchAll(PDO::FETCH_ASSOC);
	}

	/*private function placeBid($data)
	{
		global $db;

		$result = $db->query("
			INSERT
				stuff
			INTO
				table
			");

		return $result->fetchAll(PDO::FETCH_ASSOC);
	}*/
}

?>