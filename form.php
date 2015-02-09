<?php
$date = htmlspecialchars($_POST["date"]);
$minute = htmlspecialchars($_POST["minute"]);
$hour = htmlspecialchars($_POST["hour"]);
$period = htmlspecialchars($_POST["period"]);
$cost = htmlspecialchars($_POST["cost"]);
$city = htmlspecialchars($_POST["city"]);
$state = htmlspecialchars($_POST["state"]);
$venue = htmlspecialchars($_POST["venue"]);

echo "Added your show at " . $venue . " on " . $date . " @ " . $hour . ":" . $minute . $period .
		" in " . $city . ", " . $state . " costing $" . $cost . "."
?>