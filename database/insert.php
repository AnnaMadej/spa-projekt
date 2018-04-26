<?php 
$data = json_decode(file_get_contents("php://input"));
$imie = $data->imie;
$nazwisko = $data->nazwisko;
$email = $data->email;
$telefon = $data->telefon;
$dataPrzyj = $data->dataPrzyj;
$iloscDni = $data->iloscDni;
$iloscDoroslych = $data->iloscDoroslych;
$iloscDzieci = $data->iloscDzieci;
$pkp = $data->pkp;
$lotnisko = $data->lotnisko;
$pies = $data->pies;
$sprzatanie = $data->sprzatanie;
$conn = new mysqli('a-m.netstrefa.pl', 'id6965_s189490', 's189490', 'id6965_mieszkanie');
$conn -> query ('SET NAMES utf8');
$conn -> query ('SET CHARACTER_SET utf8_unicode_ci');
$imie = $conn->real_escape_string($imie);
$nazwisko = $conn->real_escape_string($nazwisko);
$email = $conn->real_escape_string($email);
$telefon = $conn->real_escape_string($telefon);
$dataPrzyj = $conn->real_escape_string($dataPrzyj);

$conn->query("INSERT INTO `zapytania` (`ImieKlienta`, `NazwiskoKlienta`, `emailKlienta`, `telefonKlienta`, `dataPrzyj`, `iloscDni`, `iloscDoroslych`, `iloscDzieci`, `pkp`, `lotnisko`, `pies`, `sprzatanie`) VALUES('" . $imie . "', '" . $nazwisko . "', '" . $email . "', '" . $telefon . "', '" . $dataPrzyj . "', '" . $iloscDni . "', '" . $iloscDoroslych . "', '" . $iloscDzieci . "', '" . $pkp . "', '" . $lotnisko . "', '" . $pies . "', '" . $sprzatanie . "' )");
$conn->close();

?>