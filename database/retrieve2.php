<?php

$magicWord = $_POST['magicWord'];
if ($magicWord === "abcdefg") {

$timestamp = time()+(2*60*60);
$data = "\"" . date("Y-m-d",$timestamp) . "\" ";
// połączenie z serwerem i bazą danych
$conn = new mysqli('a-m.netstrefa.pl', 'id6965_s189490', 's189490', 'id6965_mieszkanie');
$conn -> query ('SET NAMES utf8');
$conn -> query ('SET CHARACTER_SET utf8_unicode_ci');
$conn->query('DELETE FROM `zapytania` WHERE `dataPrzyj` < $data ');
$result = $conn->query("SELECT `IdZapytania`, `ImieKlienta`, `NazwiskoKlienta`, `emailKlienta`, `telefonKlienta`, `dataPrzyj`, `iloscDni`, `iloscDoroslych`, `iloscDzieci`, `pkp`, `lotnisko`, `pies`, `sprzatanie` FROM `id6965_mieszkanie`.`zapytania` WHERE `dataPrzyj` > NOW() order by `dataPrzyj`");
$outp          = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
$outp .= "<zapytania>";

while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
	
	$dataPrzyj = strtotime($rs["dataPrzyj"]);
	$dataWyj = date("Y-m-d",$dataPrzyj+($rs["iloscDni"] * 24*60*60));
	$idZapytania = $rs["IdZapytania"];
	
	
    $outp .=  "<zapytanie id=\"$idZapytania\">";
	
		 $outp .=  "<ImieKlienta>";
			 $outp .=  $rs["ImieKlienta"];
	     $outp .=  "</ImieKlienta>";
		 
		 $outp .=  "<NazwiskoKlienta>";
			 $outp .=  $rs["NazwiskoKlienta"];
	     $outp .=  "</NazwiskoKlienta>";
		 
		 $outp .=  "<emailKlienta>";
			 $outp .= $rs["emailKlienta"];
	     $outp .=  "</emailKlienta>";
		 
		 $outp .=  "<telefonKlienta>";
			 $outp .=  $rs["telefonKlienta"];
	     $outp .=  "</telefonKlienta>";
		 
		 $outp .=  "<dataPrzyj>";
			 $outp .= $rs["dataPrzyj"];
	     $outp .=  "</dataPrzyj>";
		 
		 $outp .=  "<iloscDni>";
			 $outp .= $rs["iloscDni"];
	     $outp .=  "</iloscDni>";
		 
		 $outp .=  "<dataWyj>";
			 $outp .= $dataWyj;
	     $outp .=  "</dataWyj>";
		 
		 $outp .=  "<iloscDzieci>";
			  $outp .=  $rs["iloscDzieci"];
	     $outp .=  "</iloscDzieci>";
		 
		  $outp .=  "<iloscDoroslych>";
			  $outp .=  $rs["iloscDoroslych"];
	     $outp .=  "</iloscDoroslych>";
		 
		 $outp .=  "<pkp>";
			 $outp .=  $rs["pkp"];
	     $outp .=  "</pkp>";
		 
		 $outp .=  "<lotnisko>";
			 $outp .=  $rs["lotnisko"];
	     $outp .=  "</lotnisko>";
		 
		 $outp .=  "<pies>";
			 $outp .=  $rs["pies"];
	     $outp .=  "</pies>";
		 
		 $outp .=  "<sprzatanie>";
			  $outp .=  $rs["sprzatanie"];
	     $outp .=  "</sprzatanie>";


				  
	
	
	$outp .=  "</zapytanie>";

}

$outp .= "</zapytania>";

$conn->close();

echo( $outp); 
}
?>

