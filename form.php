<?php
$date = $_POST["date"];
$minute = $_POST["minute"];
$hour = $_POST["hour"];
$period = $_POST["period"];
$cost = $_POST["cost"];
$city = $_POST["city"];
$state = $_POST["state"];
$venue = $_POST["venue"];

echo "Added your show at " . $venue . " on " . $date . " @ " . $hour . ":" . $minute . $period .
		" in " . $city . ", " . $state . " costing $" . $cost . "."
?>