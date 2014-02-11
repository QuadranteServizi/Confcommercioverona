<?php
$connect=mysql_connect("localhost", "confcommercio", "fekfamt[510");
if (!$connect) {
die('connection not possible: ' . mysql_error());
}


$db=mysql_select_db("joomla_confcommercioverona15",$connect);

if (!$db) {
die('could not select database: ' . mysql_error());
}


mysql_query("SET character_set_results = 'utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'", $connect);
$result = mysql_query('SELECT id,title FROM jos17_content LIMIT 10');
if (!$result) {
die('query failed: ' . mysql_error());
}


 /*
while ($row = mysql_fetch_array($result)) {
print ("row 0: " . $row[0]);
print (" row 1: " . $row[1]);
print "\n";
}         */

?>

<div class="toolbar">
	<h1>Rassegna Stampa</h1>
	<a class="button back" onclick="jsTouch.loadPage('pages/menu.html', { transition: 'slide-right' });">Back</a>
</div>
<div class="content">
	<ul class="rounded">
  <?php	while ($row = mysql_fetch_array($result)) { ?>
  <li><a onclick="jsTouch.loadPage('pages/shownewsold.php?id=<?=$row["id"]?>', { transition: 'slide-left'});"><?=$row['title']?></a></li>
  <?php } ?>  
	</ul>
	<div style="clear: both; 15px"></div>
</div>