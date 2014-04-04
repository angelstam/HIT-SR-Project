<?php

require_once("RestRoute-class.inc");
require_once("SimpleAuth-class.inc");

/**
* RestRouteEnquiries:
*/
class RestRouteEnquiries extends RestRoute
{
	function get($p)
	{
		if (count($p) == 0)
		{
			return $this->getEnquiries();
		}
		return false;
	}

	function put($p, $data)
	{
		if (count($p) == 0)
		{
			return $this->createEnquiry($data);
		}
		return false;
	}

	private function getEnquiries()
	{
		global $db;

		$result = $db->query("
			SELECT
				*
			FROM
				enquiries
			");

		return $result->fetchAll(PDO::FETCH_ASSOC);
	}

	private function createEnquiry($data)
	{
		global $db;

		$auth = new SimpleAuth();

		$result = $db->prepare("
			INSERT INTO
				enquiries
			SET
				car_id = :car_id,
				user_id = :user_id,
				target_price = :target_price,
				color = :color,
				milage = :milage,
				from_year = :from_year
			");

		if ($auth->loginCheck())
		{
			$result->bindParam(':car_id', $data->car_id, PDO::PARAM_INT);
			$result->bindParam(':user_id', $auth->getUserID(), PDO::PARAM_INT);
			$result->bindParam(':target_price', $data->target_price, PDO::PARAM_INT);
			$result->bindParam(':color', $data->color, PDO::PARAM_STR);
			$result->bindParam(':milage', $data->milage, PDO::PARAM_INT);
			$result->bindParam(':from_year', $data->from_year, PDO::PARAM_INT);
			$result->execute();

			return Array("enquiry_id"=>$db->lastInsertId());
		}
		
		return false;
	}
}

?>