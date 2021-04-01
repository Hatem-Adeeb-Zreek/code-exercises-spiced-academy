// Rewrite the following function to use destructuring assignment for the three variables it creates

(function () {
    function logInfo({ name, country, population: numPeople }) {
        console.log(`${name} is in ${country} and has ${numPeople} in it.`);
    }

    // arrow function version
    // const logInfo = ({ name, country, population: numPeople }) => {
    //     console.log(`${name} is in ${country} and has ${numPeople} in it.`);
    // };

    logInfo({ name: "latakia", country: "syria", population: 26000000 });
})();
