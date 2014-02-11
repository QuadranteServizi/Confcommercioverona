<?
function removeAccents($str) {
	$a = array('°','À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'ÿ', 'A', 'a', 'A', 'a', 'A', 'a', 'C', 'c', 'C', 'c', 'C', 'c', 'C', 'c', 'D', 'd', 'Ð', 'd', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'G', 'g', 'G', 'g', 'G', 'g', 'G', 'g', 'H', 'h', 'H', 'h', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', '?', '?', 'J', 'j', 'K', 'k', 'L', 'l', 'L', 'l', 'L', 'l', '?', '?', 'L', 'l', 'N', 'n', 'N', 'n', 'N', 'n', '?', 'O', 'o', 'O', 'o', 'O', 'o', 'Œ', 'œ', 'R', 'r', 'R', 'r', 'R', 'r', 'S', 's', 'S', 's', 'S', 's', 'Š', 'š', 'T', 't', 'T', 't', 'T', 't', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'W', 'w', 'Y', 'y', 'Ÿ', 'Z', 'z', 'Z', 'z', 'Ž', 'ž', '?', 'ƒ', 'O', 'o', 'U', 'u', 'A', 'a', 'I', 'i', 'O', 'o', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?');
	$b = array('','A', 'A', 'A', 'A', 'A', 'A', 'AE', 'C', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'D', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'U', 'U', 'U', 'U', 'Y', 's', 'a', 'a', 'a', 'a', 'a', 'a', 'ae', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'n', 'o', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'y', 'A', 'a', 'A', 'a', 'A', 'a', 'C', 'c', 'C', 'c', 'C', 'c', 'C', 'c', 'D', 'd', 'D', 'd', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'E', 'e', 'G', 'g', 'G', 'g', 'G', 'g', 'G', 'g', 'H', 'h', 'H', 'h', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'I', 'i', 'IJ', 'ij', 'J', 'j', 'K', 'k', 'L', 'l', 'L', 'l', 'L', 'l', 'L', 'l', 'l', 'l', 'N', 'n', 'N', 'n', 'N', 'n', 'n', 'O', 'o', 'O', 'o', 'O', 'o', 'OE', 'oe', 'R', 'r', 'R', 'r', 'R', 'r', 'S', 's', 'S', 's', 'S', 's', 'S', 's', 'T', 't', 'T', 't', 'T', 't', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'W', 'w', 'Y', 'y', 'Y', 'Z', 'z', 'Z', 'z', 'Z', 'z', 's', 'f', 'O', 'o', 'U', 'u', 'A', 'a', 'I', 'i', 'O', 'o', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'U', 'u', 'A', 'a', 'AE', 'ae', 'O', 'o', '?', 'a', '?', 'e', '?', '?', 'O', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?');
	return str_replace($a, $b, $str);
}
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
$feedName = "Circolari Area Riservata";
$feedDesc = "Ecco l'elenco completo dei numeri del Commercio Veronese";
$feedURL = "http://www.confcommercioverona.it/index.php?option=com_content&view=article&id=538&Itemid=94";
$feedBaseURL = "http://www.confcommercioverona.it/images/commercioVeronese/"; // must end in trailing forward slash (/).

$allowed_ext = ".pdf,.PDF";

?><<?= '?'; ?>xml version="1.0"<?= '?'; ?>>
<rss version="2.0">
	<channel>
	
<?
$files = array();
$dir=opendir("../../dmdocuments/");
$limit=0;
while(($file = readdir($dir)) !== false)  
{  
  if ($limit<20){
  $limit++;

	$path_info = pathinfo($file);
	$ext = strtoupper($path_info['extension']);
  if($ext=="")$ext=".";

	if($file !== '.' && $file !== '..' && !is_dir($file) && strpos($allowed_ext, $ext)>0)  
	{  
		$files[]['name'] = $file;  
  /*  
    
       $lastModified = @filemtime($file);
    if($lastModified == NULL) {
        $lastModified = filemtime($file);
        $file=$lastModified;
	   }
		$files[]['timestamp'] = filemtime($file);
         */
  }  
} 
} 
closedir($dir);
// natcasesort($files); - we will use dates and times to sort the list.

for($i=0; $i<count($files); $i++) {
	if($files[$i] != "index.php") {
		 echo "<li><a href=\"".$files[$i]."\">"  . substr($files[$i], 0, strrpos($files[$i]."", ".")) . "</a></li>\n";
		echo "    <item>\n";
		echo "		<title>". removeAccents($files[$i]['name']) ."</title>\n";
		echo "		<link>". $feedBaseURL . removeAccents($files[$i]['name']) . "</link>\n";
    echo "		<description>Circolare area riservata</description>\n";
    echo " <image>http://www.confcommercioverona.it/app/s/img/doc.png</image>";
		echo "    </item>\n";
	}
}
?>
	</channel>
</rss>