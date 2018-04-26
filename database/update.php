<?php
   $conn = new mysqli('a-m.netstrefa.pl', 'id6965_s189490', 's189490', 'id6965_mieszkanie');
   $conn -> query ('SET NAMES utf8');
   $conn -> query ('SET CHARACTER_SET utf8_unicode_ci');
   $conn->query('DELETE FROM `zapytania` WHERE `dataPrzyj` < NOW() ');
   
   $dorosly = $_POST['dorosly'];
   $dziecko = $_POST['dziecko'];
   $pies =  $_POST['pies'];
   $pkp = $_POST['pkp'];
   $sprzatanie = $_POST['sprzatanie'];
   $lotnisko = $_POST['lotnisko'];
   
   $dorosly  = $conn->real_escape_string($dorosly );
   $dziecko= $conn->real_escape_string($dziecko);
   $pies = $conn->real_escape_string($pies);
   $pkp = $conn->real_escape_string($pkp);
   $pkp = $conn->real_escape_string($pkp);
   $sprzatanie  = $conn->real_escape_string($sprzatanie );
   $lotnisko  = $conn->real_escape_string($lotnisko);
   
   $conn->query('UPDATE `ceny` SET `cena`=' . $dorosly . ' WHERE `uluga`="dorosly"');
   $conn->query('UPDATE `ceny` SET `cena`=' . $dziecko . ' WHERE `uluga`="dziecko"');
   $conn->query('UPDATE `ceny` SET `cena`=' . $pies . ' WHERE `uluga`="pies"');
   $conn->query('UPDATE `ceny` SET `cena`=' . $pkp . ' WHERE `uluga`="pkp"');
   $conn->query('UPDATE `ceny` SET `cena`=' . $sprzatanie . ' WHERE `uluga`="sprzatanie"');
   $lastQuery = $conn->query('UPDATE `ceny` SET `cena`=' . $lotnisko . ' WHERE `uluga`="lotnisko"');
  
   mysqli_close($conn);
   
   if($lastQuery) echo "OK";   
?>