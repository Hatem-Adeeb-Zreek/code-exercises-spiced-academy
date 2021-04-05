(function () {
    var getNameAndCountry = function (obj) {
        var name = obj.name,
            country = obj.country;
        return [name, country];
    };

    var getRelocatedCity = function (city1) {
        var city2 =
            arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : { country: "Germany" };

        var country = getNameAndCountry(city2)[1];
        return Object.assign({}, city1, {
            country: country,
        });
    };

    var city1 = {
        name: "Latakia",
        country: "Syria",
    };

    var city2 = {
        name: "Budapest",
        country: "Hungary",
    };
    console.log(getRelocatedCity(city1));
    console.log(getRelocatedCity(city1, city2));
    console.log(getRelocatedCity(city2, city1));
})();
