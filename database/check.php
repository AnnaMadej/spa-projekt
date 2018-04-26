<?php
   $conn = new mysqli('a-m.netstrefa.pl', 'id6965_s189490', 's189490', 'id6965_mieszkanie');
   $conn -> query ('SET NAMES utf8');
   $conn -> query ('SET CHARACTER_SET utf8_unicode_ci');
   $conn->query('DELETE FROM `zapytania` WHERE `dataPrzyj` < NOW() ');
   
   $idZapytania = $_POST['queryId'];
   $result = $conn->query('SELECT `idZapytania` FROM `zapytania` WHERE `idZapytania` >' .  $idZapytania .' order by `idZapytania` DESC LIMIT 1');
  
   mysqli_close($conn);
    $ostatniIdZapytania="";
   
   while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	   $ostatniIdZapytania = $rs["idZapytania"];  
   }
   
   
   if($ostatniIdZapytania != $idZapytania && $ostatniIdZapytania != "" ) echo "$ostatniIdZapytania";   
   
?>