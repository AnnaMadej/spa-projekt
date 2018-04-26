#### spa-projekt
# Rejestrator pobytu - opis i instrukcja obsługi aplikacji

## Opis
### Cel aplikacji
Aplikacja została stworzona w celu obsługi rezerwacji pobytu w oferowanym do wynajmu mieszkaniu oraz aby w przystępny sposób umożliwić 
potencjalnym klientom zapoznanie się ze szczegółami oferty, sprawdzenia dostępności terminów jak i przeglądania galerii zawierającej 
zdjęcia oferowanego mieszkania.  
### Opis aplikacji
Aplikacja zrealizowana jest zgodnie z założeniami **SPA - Single Page Application**. Składa się ona z 3 następujących "podstron":
* Galeria - zawarte są tu zdjęcia przedstawiające poszczególne pomieszczenia w mieszkaniu oferowanym do wynajęcia.
* Rezerwacja - zasadnicza część aplikacji umożliwiająca potencjalnym klientom przesyłanie szczegółów dotyczących ich pobytu do weryfikacji i rezerwacji.  
* Kalendarz - przedstawione w formie kalendarza wolne i zajęte terminy najmu.
### Autorzy aplikacji
1. Anna Madej 189490 KrZZIs3011Io
1. Bartosz Domagalski 189146 KrZZIs3011Io
## Instrukcja obsługi
### Galeria
Po wejściu na stronę z aplikacją użytkownik widzi w górnej części ekranu menu wyboru zawierające 4 elementy (Galeria, Rezerwacja, Kalendarz, flaga)
pierwsze trzy służą do nawigacji pomiędzy podstronami aplikacji, ostatni (flaga PL/GB) służy do zmiany języka; poniżej menu wyboru jako pierwsza strona 
zamieszczona została galeria. Galeria w formie karuzeli zawiera 6 zdjęć, które same się zmieniają w ustalonej kolejności. 
Dodatkowo, po lewej i prawej stronie zdjęcia zamieszczone zostały strzałki(przyciski) służące do zmiany zdjęć ręcznie, oraz w dolnej części
zdjęcia małe kółeczka również służące do zmiany zdjęć.
### Rezerwacja
Po przyciśnięciu przycisku **Rezerwacja** z menu wyboru użytkownikowi przedstawiany jest formularz do wypełnienia. 
Poniżej zostały opisane poszczególne jego elementy.
* Imię: - należy wpisać swoje imię
* Nazwisko: - należy wpisać swoje nazwisko
* Email: - należy podać email służący do kontaktu
* Nr telefonu: - należy podać numer telefonu służący do kontaktu  
_Po wypełnieniu powyższych danych zostanie odsłonięty element **Zapamiętaj mnie** umożliwiający użytkownikowi zapisanie w Local Storage 
powyższych danych na przyszłość_  
* Data przyjazdu: - należy podać przewidywaną przyjazdu
* Data wyjazdu: - należy podać przewidywaną datę wyjazdu  
_Po wybraniu daty przyjazdu i wyjazdu, zostaną odsłonięte kolejne elementy do wypełnienia oraz informacyjne:  
**Ilość noclegów** - element informacyjny zawierający wyliczenie ilości dni wynajmu_
* Ilość osób: - należy wybrać z listy ilość osób, które będą przebywać w mieszkaniu na czas wynajmu
* Ilość dzieci do 2 lat: - należy wybrać z listy ilość dzieci, które będą przebywać w mieszkaniu na czas wynajmu
* Opcje dodatkowe: - zależy zaznaczyć dodatkowe usługi w razie potrzeby
 * Transport z dworca PKP
 * Transport z lotniska
 * Pobyt z psem
 * Sprzątanie po pobycie  
_Po wypełnieniu wszystkich pól w dolnej części ekranu użytkownikowi zostanie przedstawione podsumowanie kosztów pobytu (element **Suma:**)_  
_**Ceny z dnia:** - informacja o dacie pobrania cennika usług_
#### Przyciski służące do obsługi formularza:  
* Pobierz aktualne ceny - po przyciśnięciu zostaną pobrane do Local Storage aktualne ceny usług
* Wyślij zapytanie - po przyciśnięciu szczegóły dotyczące pobytu wypełnione przez potencjalnego klienta zostają przesłane do bazy danych w celu weryfikacji  
_Po wysłaniu zapytania użytkownikowi prezentowana jest tabelka ze szczegółami wysłanego zapytania oraz podziękowanie, 
dodatkowo ma on możliwość (poprzez przyciśnięcie **Wyślij kolejne zapytanie** powrotu do czystego formularza rezerwacji i wysłania kolejnego zapytania_
* Wyczyść formularz - wszystkie informacje wpisane przez użytkownika zostają usunięte  
_W przypadku, gdy użytkownik wybrał opcję **Zapamiętaj mnie**, jego dane (tj. imię, nazwisko, email i nr telefonu) przechowywane są w Local Storage
i pojawia się dodatkowy przycisk w dolnej części ekranu **Usuń wszystkie zapisane dane** służący do usunięcia wcześniej zapisanych danych_
### Kalendarz  
Po wybraniu tej opcji z menu wyboru w formie kalendarza prezentowane są użytkownikom, wolne oraz zajęte terminy.
### Flaga (PL/GB)  
Przycisk służący do przełączania wersji językowej aplikacji
