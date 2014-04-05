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

	function put($p, $data)
	{
		if (count($p) == 0)
		{
			return $this->acceptBid($data);
		}
		return false;
	}

	private function getBids()
	{
		global $db;

		$auth = new SimpleAuth();

		if ($auth->loginCheck())
		{
			$result = $db->prepare("
				SELECT
					bids.*
				FROM
					bids
					LEFT JOIN enquiries ON bids.on_enquiry_id=enquiries.enquiry_id
				WHERE
					enquiries.user_id = :user_id
				");
			$result->bindParam(':user_id', $auth->getUserID(), PDO::PARAM_INT);
			$result->execute();

			return $result->fetchAll(PDO::FETCH_ASSOC);
		}
		
		return false;
	}

	private function acceptBid($data)
	{
		global $db;

		$auth = new SimpleAuth();

		if ($auth->loginCheck())
		{
			$result = $db->prepare("
				UPDATE
					enquiries
				SET
					accepted_bid_id = :accepted_bid_id
				WHERE
					user_id = :user_id
					AND enquiry_id = :enquiry_id
					AND ISNULL(accepted_bid_id)
				");
			$result->bindParam(':user_id', $auth->getUserID(), PDO::PARAM_INT);
			$result->bindParam(':enquiry_id', $data->enquiry_id, PDO::PARAM_INT);
			$result->bindParam(':accepted_bid_id', $data->accepted_bid_id, PDO::PARAM_INT);
			$result->execute();

			return $result->rowCount() > 0;
		}
		
		return false;
	}
}

?>