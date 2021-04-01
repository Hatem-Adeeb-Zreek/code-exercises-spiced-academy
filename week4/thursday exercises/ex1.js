// Write a function that takes an array as an argument and returns a new array
//containing all of the items that are in the array that was passed in but in reverse order.

(function () {
    const reversedArray = (arr) => arr.slice().reverse();
    let numbers = [1, 2, 3, 4, 5];
    console.log(reversedArray(numbers));
    console.log(numbers);
})();
