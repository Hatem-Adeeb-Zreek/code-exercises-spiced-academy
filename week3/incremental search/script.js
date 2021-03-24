(function (countries) {
    // target elements
    var searchField = $("input");
    var results = $("#results");

    // input event
    searchField.on("input", function () {
        var userInput = searchField.val().toLowerCase();

        if (userInput === null || userInput === "") {
            results.empty();
            return;
        }

        var matchResults = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                matchResults.push(countries[i]);
                if (matchResults.length >= 4) {
                    break;
                }
            }
        }

        var htmlForCountries = "";
        if (matchResults.length !== 0) {
            for (var j = 0; j < matchResults.length; j++) {
                htmlForCountries +=
                    "<p class='country'>" + matchResults[j] + "</p>";
            }
        } else {
            htmlForCountries += "<p>No results</p>";
        }
        results.html(htmlForCountries);
    });

    // mousedown event
    results.delegate(".country", "mousedown", function (ev) {
        searchField.val($(ev.target).text());
    });

    // mouseover event
    results.delegate(".country", "mouseover", function (e) {
        $(".highlight").removeClass("highlight");
        $(e.target).addClass("highlight");
    });

    // blur event
    searchField.on("blur", function () {
        results.hide();
    });
    // focus event
    searchField.on("focus", function () {
        results.show();
    });

    // Keydown event
    searchField.on("keydown", function (eve) {
        var filteredCountries = $(".country");
        if (eve.keyCode === 40 && !filteredCountries.hasClass("highlight")) {
            filteredCountries.eq(0).addClass("highlight");
        } else if (
            eve.keyCode === 40 &&
            filteredCountries.eq(3).hasClass("highlight")
        ) {
            return;
        } else if (
            eve.keyCode === 40 &&
            filteredCountries.slice(0, 3).hasClass("highlight")
        ) {
            var highlightedCountry = $(".highlight");
            highlightedCountry.removeClass("highlight");
            highlightedCountry.next().addClass("highlight");
        }

        if (
            eve.keyCode === 38 &&
            filteredCountries.eq(0).hasClass("highlight")
        ) {
            return;
        } else if (
            eve.keyCode === 38 &&
            filteredCountries.slice(1, 4).hasClass("highlight")
        ) {
            var up = $(".highlight");
            up.removeClass("highlight");
            up.prev().addClass("highlight");
        }

        var highlightedCountry = $(".highlight");
        if (eve.keyCode === 13) {
            $(eve.target).val(highlightedCountry.text());
        }
    });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
