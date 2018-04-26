<?php
   $conn = new mysqli('a-m.netstrefa.pl', 'id6965_s189490', 's189490', 'id6965_mieszkanie');
   $conn -> query ('SET NAMES utf8');
   $conn -> query ('SET CHARACTER_SET utf8_unicode_ci');
   $conn->query('DELETE FROM `zapytania` WHERE `dataPrzyj` < NOW() ');
   
   $idZapytnia = $_POST['queryId'];
   $lastQuery = $conn->query('DELETE FROM `zapytania` WHERE `idZapytania` = ' .   $idZapytnia);
  
   mysqli_close($conn);
   
   if($lastQuery) echo "OK";   
?>