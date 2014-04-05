<?php

$user = 'reversecarbay';
$pass = 'secret';
$host = '127.0.0.1';
$db_name = 'reversecarbay';

require("../include/RestService-class.inc");
require("../include/RestRouteLogin-class.inc");
require("../include/RestRouteLogout-class.inc");
require("../include/RestRouteSignUp-class.inc");
require("../include/RestRouteEnquiries-class.inc");
require("../include/RestRouteBids-class.inc");
require("../include/RestRouteAcceptBid-class.inc");
require("../include/RestRouteCars-class.inc");

session_start();

try
{
	// Create a new PDO to connect to the database.
	$db = new PDO("mysql:host=$host;dbname=$db_name", $user, $pass);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e)
{
    die('ERROR: ' . $e->getMessage());
}

$rest = new RestService();
$rest->addRoute("login", new RestRouteLogin());
$rest->addRoute("logout", new RestRouteLogout());
$rest->addRoute("signUp", new RestRouteSignUp());
$rest->addRoute("enquiries", new RestRouteEnquiries());
$rest->addRoute("bids", new RestRouteBids());
$rest->addRoute("acceptBid", new RestRouteAcceptBid());
$rest->addRoute("cars", new RestRouteCars());
echo json_encode($rest->output());

?>