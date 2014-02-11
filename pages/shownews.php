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
$result = mysql_query('SELECT id,title,introtext,jos17_content.fulltext as testo FROM jos17_content WHERE id="'.$_GET['id'].'"');
if (!$result) {
//die('query failed: ' . mysql_error());
print 'SELECT id,title,fulltext FROM jos17_content WHERE id="'.$_GET['id'].'"';
}

?>
<?php	while ($row = mysql_fetch_array($result)) { ?> 

  <?php
  $intro=$row['introtext'];
  $intro=str_replace("images/", "http://www.confcommercioverona.it/images/", $intro); 

 
$doc = new DOMDocument();
$doc->loadHTML($intro);
foreach ($doc->getElementsByTagName('a') as $elem) {
    if ($elem->hasAttribute('href')) {
        echo "\n".str_replace("\"","'",str_replace("\\","",json_encode($elem->getAttribute('href'))))."\n";
        //$elem->setAttribute('onclick', 'window.open('.$elem->getAttribute('href').', \'_blank\', \'location=no\')');
        $elem->setAttribute('onclick', 'window.open(\'gne\')');
        $elem->removeAttribute('href');    
    }
}

echo $doc->saveHTML();
   /**/

   
}  ?>


