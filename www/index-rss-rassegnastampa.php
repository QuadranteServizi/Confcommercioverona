<?

/*
	PHP RSS Dir
	Aalaap Ghag
	http://www.aalaap.com
	aalaap@gmail.com

	This script, when run from a directory containing files, will provide an
	RSS 2.0 feed that contains the list and modification times for all the
	files.

	If you have a folder on your server with files that you want to share, you
	can use this script to provide an RSS feed to your users instead of a plain
	simple directory listing. Being an RSS feed with modification times, it
	also allows users to be notified of new items as and when you put them.

	The script is based on a simple directory listing script I found on the
	web. It had no owner info, so I don't know who to credit.

	This is just the first release of the script. I will be adding new features to it.

	This script is provided under the GNU GPL license.

*/
$feedName = "Rassegna Stampa";
$feedDesc = "Ecco l'elenco completo della rassegna stampa";
$feedURL = "http://www.confcommercioverona.it/index.php?option=com_content&view=article&id=538&Itemid=94";
$feedBaseURL = "http://www.confcommercioverona.it/images/rassegnaStampa/"; // must end in trailing forward slash (/).

$allowed_ext = ".pdf,.PDF";

?><<?= '?'; ?>xml version="1.0"<?= '?'; ?>>
<rss version="2.0">
	<channel>
	
<?
$files = array();
$dir=opendir("../../images/rassegnaStampa/");          

while(($file = readdir($dir)) !== false)  
{  
	$path_info = pathinfo($file);
	$ext = strtoupper($path_info['extension']);

	if($file !== '.' && $file !== '..' && !is_dir($file) && strpos($allowed_ext, $ext)>0)  
	{  
		$files[]['name'] = $file;  
		//$files[]['timestamp'] = filemtime($file);  
	}  
}  
closedir($dir);
// natcasesort($files); - we will use dates and times to sort the list.

for($i=0; $i<count($files); $i++) {
	if($files[$i] != "index.php") {
		// echo "<li><a href=\"".$files[$i]."\">"  . substr($files[$i], 0, strrpos($files[$i], ".")) . "</a></li>\n";
		echo "	<item>\n";
		echo "		<title>Rassegna stampa del ".  preg_replace("/\\.[^.\\s]{3,4}$/", "", $files[$i]['name']) ."</title>\n";
		echo "		<link>". $feedBaseURL . $files[$i]['name'] . "</link>\n";
    echo "		<description>Rassegna stampa del ".  preg_replace("/\\.[^.\\s]{3,4}$/", "", $files[$i]['name'])." a cura di Confcommercio Verona</description>\n";
    echo " <image>http://www.confcommercioverona.it/app/s/img/doc.png</image>";
// 		echo "		<pubDate>". date("D M j G:i:s T Y", $files[$i]['timestamp']) ."</pubDate>\n";
		echo "    </item>\n";
	}
}  
?>
	</channel>
</rss>