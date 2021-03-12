// filter version

function getLessThanZero(numbers) {
    var filteredArr = numbers.filter(function (num) {
        return num < 0;
    });
    return filteredArr;
}

// for - if version

// function getLessThanZero(numbers) {
//     var filteredArr = [];
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             filteredArr.push(numbers[i]);
//         }
//     }
//     return filteredArr;
// }

console.log("filteredArr:", getLessThanZero([1, 2, -1, -90, 10])); //[-1, -90]
console.log("filteredArr:", getLessThanZero([1, 2])); //[]
