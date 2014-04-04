<?php

require_once("RestRoute-class.inc");
require_once("SimpleAuth-class.inc");

/**
* RestRouteBids:
*/
class RestRouteBids extends RestRoute
{
	function get($p)
	{
		if (count($p) == 0)
		{
			return $this->getBids();
		}
		return false;
	}

	function put($p, $data)
	{
		if (count($p) == 0)
		{
			return $this->placeBid($data);
		}
		return false;
	}

	private function getBids()
	{
		global $db;

		$auth = new SimpleAuth();

		if ($auth->loginCheck())
		{
			$result = $db->query("
				SELECT
					*
				FROM
					bids
				");

			return $result->fetchAll(PDO::FETCH_ASSOC);
		}

		return false;
	}

	private function placeBid($data)
	{
		global $db;

		$auth = new SimpleAuth();

		if ($auth->loginCheck())
		{
			$result = $db->prepare("
				INSERT INTO
					bids
				SET
					user_id = :user_id,
					on_enquiry_id = :on_enquiry_id,
					enquiry_configuration = :enquiry_configuration
				");
			$result->bindParam(':user_id', $auth->getUserID(), PDO::PARAM_INT);
			$result->bindParam(':on_enquiry_id', $data->on_enquiry_id, PDO::PARAM_INT);
			$result->bindParam(':enquiry_configuration', $data->enquiry_configuration, PDO::PARAM_STR);
			$result->execute();

			return Array("bid_id"=>$db->lastInsertId());
		}

		return false;
	}
}

?>