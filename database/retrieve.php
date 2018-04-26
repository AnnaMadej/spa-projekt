<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$timestamp = time()+(2*60*60);
$data = "\"" . date("Y-m-d  H:i",$timestamp) . "\" ";
// połączenie z serwerem i bazą danych
$conn = new mysqli('a-m.netstrefa.pl', 'id6965_s189490', 's189490', 'id6965_mieszkanie');
$result = $conn->query("SELECT `uluga` , `cena` FROM `id6965_mieszkanie`.`ceny` ");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ", ";}
    $outp .=  "\"" . $rs["uluga"] . "\"" . ": "   . $rs["cena"];
}
$outp ='{"records": {' . $outp . ', "data": ' . $data .  '}} ';
$conn->close();

echo($outp); 
?>