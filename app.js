        var app = angular.module('application', []);
        app.controller('controller', function($scope, $http) {

            var languagesList = {
                "pl": {
					"abbreviation": "pl",
                    "name": "Imię",
                    "surname": "Nazwisko",
                    "telephone": "Numer telefonu",
                    "arrivalDate": "Data przyjazdu",
                    "departueDate": "Data wyjazdu",
                    "numberOfNights": "Ilość noclegów",
                    "numberOfAdults": "Ilość osób",
                    "numberOfBabies": "Ilość dzieci do 2 lat",
                    "additionalOptions": "Opcje dodatkowe",
                    "transportFromTrain": "Transport z dworca PKP",
                    "transportFromAir": "Transport z lotniska",
                    "dog": "Pobyt z psem",
                    "cleaning": "Sprzątanie po pobycie",
                    "totalPrice": "Suma",
                    "pricesFrom": "Ceny z dnia",
                    "downloadCurrentPrices": "Pobierz aktualne ceny",
                    "sendEnquiry": "Wyślij zapytanie",
                    "gallery": "Galeria",
                    "booking": "Rezerwacja",
                    "calendar": "Kalendarz",
                    "kitchen": "Kuchnia",
                    "fullEq": "W pełni wyposażona",
                    "room1": "Pokój numer 1",
                    "twoSingleBeds": "Dwa łóżka jednoosobowe",
                    "room2": "Pokój numer 2",
                    "sofa": "Rozkładana sofa 120cm",
                    "typeName": "Podaj imię",
                    "typeSurname": "Podaj nazwisko",
                    "typeEmail": "Podaj adres email",
                    "typeTelephone": "Podaj numer telefonu",
                    "chooseArrival": "Wybierz datę przyjazdu",
                    "chooseDepartue": "Wybierz datę wyjazdu",
                    "languageSelector": "gb.png",
                    "anotherLanguage": "en",
                    "bookingEnquiry": "Zapytanie o rezerwację",
                    "loadMyData": "Wszytaj zapisane dane użytkownika",
                    "removeMyData": "Usuń wszystkie zapisane dane",
                    "saveMyUserData": "Zapamiętaj mnie",
                    "returnToBooking": "Wyślij kolejne zapytanie",
                    "thankYou": "Dziękujemy!",
                    "enqSent": "Twoje zapytanie zostało wysłane!",
                    "formReset": "Wyczyść formularz"

                },
                "en": {
					"abbreviation": "en",
                    "name": "Name",
                    "surname": "Surname",
                    "telephone": "Telephone number",
                    "arrivalDate": "Date of arrival",
                    "departueDate": "Date of departue",
                    "numberOfNights": "Number of nights",
                    "numberOfAdults": "Number of adults",
                    "numberOfBabies": "Number of babies",
                    "totalPrice": "Total price:",
                    "additionalOptions": "Additional options",
                    "transportFromTrain": "Pick up from train station",
                    "transportFromAir": "Pick up from airport",
                    "dog": "I'm with a dog",
                    "cleaning": "Cleaning after stay",
                    "totalPrice": "Total Price",
                    "pricesFrom": "Prices date",
                    "downloadCurrentPrices": "Download current prices",
                    "sendEnquiry": "Send your enquiry",
                    "gallery": "Gallery",
                    "booking": "Booking",
                    "calendar": "Calendar",
                    "kitchen": "Kitchen",
                    "fullEq": "Full equipped",
                    "room1": "Room number 1",
                    "twoSingleBeds": "Two single beds",
                    "room2": "Room number 2",
                    "sofa": "120cm sofa",
                    "typeName": "Type in your name",
                    "typeSurname": "Type in your surname",
                    "typeEmail": "Type in your email address",
                    "typeTelephone": "Type in your telephone number",
                    "chooseArrival": "Choose your arrival date",
                    "chooseDepartue": "Choose your departue date",
                    "languageSelector": "pl.png",
                    "anotherLanguage": "pl",
                    "bookingEnquiry": "Booking enquiry",
                    "loadMyData": "Load saved user data",
                    "removeMyData": "Clear all saved data",
                    "saveMyUserData": "Remember me",
                    "returnToBooking": "Send another enquiry",
                    "thankYou": "Thank you!",
                    "enqSent": "Your enquiry has been sent",
                    "formReset": "Reset form"
                },
            }

            $scope.changeLanguage = function(language) {
                $scope.name = (languagesList[language].name);
                $scope.surname = (languagesList[language].surname);
                $scope.telephone = (languagesList[language].telephone);
                $scope.arrivalDate = (languagesList[language].arrivalDate);
                $scope.departueDate = (languagesList[language].departueDate);
                $scope.numberOfNights = (languagesList[language].numberOfNights);
                $scope.numberOfAdults = (languagesList[language].numberOfAdults);
                $scope.numberOfBabies = (languagesList[language].numberOfBabies);
                $scope.additionalOptions = (languagesList[language].additionalOptions);
                $scope.transportFromTrain = (languagesList[language].transportFromTrain);
                $scope.transportFromAir = (languagesList[language].transportFromAir);
                $scope.dog = (languagesList[language].dog);
                $scope.cleaning = (languagesList[language].cleaning);
                $scope.totalPrice = (languagesList[language].totalPrice);
                $scope.pricesFrom = (languagesList[language].pricesFrom);
                $scope.downloadCurrentPrices = (languagesList[language].downloadCurrentPrices);
                $scope.sendEnquiry = (languagesList[language].sendEnquiry);
                $scope.gallery = (languagesList[language].gallery);
                $scope.booking = (languagesList[language].booking);
                $scope.calendar = (languagesList[language].calendar);
                $scope.kitchen = (languagesList[language].kitchen);
                $scope.fullEq = (languagesList[language].fullEq);
                $scope.room1 = (languagesList[language].room1);
                $scope.twoSingleBeds = (languagesList[language].twoSingleBeds);
                $scope.room2 = (languagesList[language].room2);
                $scope.sofa = (languagesList[language].sofa);
                $scope.typeName = (languagesList[language].typeName);
                $scope.typeSurname = (languagesList[language].typeSurname);
                $scope.typeEmail = (languagesList[language].typeEmail);
                $scope.typeTelephone = (languagesList[language].typeTelephone);
                $scope.chooseArrival = (languagesList[language].chooseArrival);
                $scope.chooseDepartue = (languagesList[language].chooseDepartue);
                $scope.languageSelector = (languagesList[language].languageSelector);
                $scope.anotherLanguage = (languagesList[language].anotherLanguage);
                $scope.bookingEnquiry = (languagesList[language].bookingEnquiry);
                $scope.loadMyData = (languagesList[language].loadMyData);
                $scope.removeMyData = (languagesList[language].removeMyData);
                $scope.saveMyUserData = (languagesList[language].saveMyUserData);
                $scope.returnToBooking = (languagesList[language].returnToBooking);
                $scope.thankYou = (languagesList[language].thankYou);
                $scope.enqSent = (languagesList[language].enqSent);
                $scope.formReset = (languagesList[language].formReset);
                localStorage.setItem('myLanguage', language);
				$.fn.datepicker.defaults.language = (languagesList[language].abbreviation);
            }

            if (localStorage.myLanguage === undefined) {
                $scope.changeLanguage("pl");
            } else {
                newLanguage = localStorage.getItem('myLanguage');
                $scope.changeLanguage(newLanguage);
            }

            $scope.saveUserData = function() {
                var person = {
                    imie: $scope.nameInput,
                    nazwisko: $scope.surnameInput,
                    email: $scope.emailInput,
                    telefon: $scope.telephoneInput
                };
                var userData = JSON.stringify(person);
                localStorage.removeItem("userData", userData);
                localStorage.setItem("userData", userData);
            }

            $scope.userDataAvailable = function() {
                if (localStorage.userData === undefined) return false;

                else return true;
            }

            $scope.removeUserData = function() {
                localStorage.removeItem("userData");
            }

            $scope.loadUserData = function() {
                if ($scope.userDataAvailable()) {
                    var savedUserData = localStorage.getItem('userData');
                    $scope.currentUserData = JSON.parse(savedUserData);
                    $scope.nameInput = $scope.currentUserData.imie;
                    $scope.surnameInput = $scope.currentUserData.nazwisko;
                    $scope.emailInput = $scope.currentUserData.email;
                    $scope.telephoneInput = $scope.currentUserData.telefon;
                }

            }

            $scope.loadUserData();

            $scope.patternEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            $scope.patternTelephone = /^[0-9\+]{1,}[0-9\-]{3,15}$/;

            $scope.sendQuery = function() {

                var station;
                var plane;
                var dogs;
                var clean;

                if ($scope.trainChechbox) station = 1;
                else station = 0;

                if ($scope.airCheckbox) plane = 1;
                else plane = 0;

                if ($scope.dogCheckbox) dogs = 1;
                else dogs = 0;

                if ($scope.cleaningCheckbox) clean = 1;
                else clean = 0;

                $http.post("http://a-m.netstrefa.pl/database/insert.php", {
                    'imie': $scope.nameInput,
                    'nazwisko': $scope.surnameInput,
                    'email': $scope.emailInput,
                    'telefon': $scope.telephoneInput,
                    'dataPrzyj': $scope.arrivalInput,
                    'iloscDni': $scope.countNights(),
                    'iloscDoroslych': $scope.adultsSelect,
                    'iloscDzieci': $scope.babiesSelect,
                    'pkp': station,
                    'lotnisko': plane,
                    'pies': dogs,
                    'sprzatanie': clean
                });

                if ($scope.saveCheckbox) $scope.saveUserData();

            }

            $scope.pricelistAvailable = function() {
                if (localStorage.aktualnyCennik === undefined) {
                    return false;
                } else return true;
            }

            $scope.getPrices = function() {
                $http.get("http://a-m.netstrefa.pl/database/retrieve.php")
                    .then(function(response) {
                        var priceList = JSON.stringify(response.data.records);
                        localStorage.removeItem("aktualnyCennik", priceList);
                        localStorage.setItem("aktualnyCennik", priceList);
                        $scope.setPrices();
                    });
            }

            $scope.setPrices = function() {
                var downloadedPrices = localStorage.getItem('aktualnyCennik');
                $scope.prices = JSON.parse(downloadedPrices);
                $scope.adultPrice = $scope.prices.dorosly;
                $scope.babyPrice = $scope.prices.dziecko;
                $scope.dogPrice = $scope.prices.pies;
                $scope.cleaningPrice = $scope.prices.sprzatanie;
                $scope.trainPrice = $scope.prices.pkp;
                $scope.airportPrice = $scope.prices.lotnisko;
                $scope.pricelistDate = $scope.prices.data;
            }

            if ($scope.pricelistAvailable()) {
                $scope.setPrices();
            }

            $scope.adultsList = [1, 2, 3];
            $scope.babiesList = [1, 2, 3, 0];
            $scope.adultsSelect = 1;
            $scope.babiesSelect = 0;
            $scope.nightsInput = 0;

            $scope.countAdults = function() {
                if ($scope.countNights() === 0) return 0;
                var amount = $scope.adultsSelect * $scope.countNights() * $scope.adultPrice;
                return amount;
            }

            $scope.countBabies = function() {
                if ($scope.countNights() === 0) return 0;
                var amount = $scope.babiesSelect * $scope.countNights() * $scope.babyPrice;
                return amount;
            }

            $scope.countAdditional = function() {
                var amount = 0;
                if ($scope.trainChechbox) amount += $scope.trainPrice;
                if ($scope.airCheckbox) amount += $scope.airportPrice;
                if ($scope.dogCheckbox) amount += ($scope.dogPrice * $scope.countNights());
                if ($scope.cleaningCheckbox) amount += $scope.cleaningPrice;
                return amount;
            }

            $scope.countTotalPrice = function() {
                if ($scope.pricelistAvailable()) return $scope.countAdults() + $scope.countBabies() + $scope.countAdditional();
                else return 0;
            }

            $scope.countNights = function() {
                if ($scope.arrivalInput && $scope.departueInput) {
                    var data1 = $scope.arrivalInput;
                    var data2 = $scope.departueInput;
                    var oneDay = 24 * 60 * 60 * 1000;
                    var msInDate1 = Date.parse(data1);
                    var msInDate2 = Date.parse(data2);
                    var differenceIndDays = Math.round(Math.abs((msInDate1 - msInDate2) / (oneDay)));
                    return differenceIndDays;
                } else return 0;
            }

            $scope.reset = function() {
                $scope.nameInput = "";
                $scope.surnameInput = "";
                $scope.emailInput = "";
                $scope.telephoneInput = "";
                $scope.arrivalInput = "";
                $scope.departueInput = "";
                $scope.adultsSelect = "1";
                $scope.babiesSelect = "0";
                $scope.dogCheckbox = false;
                $scope.cleaningCheckbox = false;
                $scope.airCheckbox = false;
                $scope.trainChechbox = false;
                $scope.saveCheckbox = false;
                $scope.loadUserData();
                $('#arrivalInput').datepicker('setEndDate', '+365d');
                $('#departueInput').datepicker('setStartDate', '+1d');
            }

            $.fn.datepicker.dates['pl'] = {
                days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
                daysShort: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Piąt.", "Sob."],
                daysMin: ["Ndz.", "Pn.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
                months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                monthsShort: ["Sty.", "Lut.", "Mar.", "Kwi.", "Maj", "Cze.", "Lip.", "Sie.", "Wrz.", "Paź.", "Lis.", "Gru."],
                today: "Dzisiaj",
                weekStart: 1,
                clear: "Wyczyść",
                format: "dd.mm.yyyy"
            };

            $("#arrivalInput").datepicker({
                autoclose: true,
                format: 'yyyy-mm-dd',
                startDate: '+1d',
                endDate: '+365d',
                todayHighlight: true,
            }).on('changeDate', function(selected) {
                var minDate = new Date(selected.date.valueOf() + 86400000);
                $('#departueInput').datepicker('setStartDate', minDate);
            });

            $("#departueInput").datepicker({
                autoclose: true,
                format: 'yyyy-mm-dd',
                todayHighlight: true,
            }).on('changeDate', function(selected) {
                var minDate = new Date(selected.date.valueOf());
                $('#arrivalInput').datepicker('setEndDate', minDate);
            })

        });