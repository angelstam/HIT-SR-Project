<?php

/**
 * RestRoute:  This class respresents a template for
 * constructing a route for use in a REST API Service. 
 *
 * Created by Johan Angelstam 2014.
 */
abstract class RestRoute
{	
	public function get($p)
	{
		return false;
	}

	public function put($p, $data)
	{
		return false;
	}
}

?>