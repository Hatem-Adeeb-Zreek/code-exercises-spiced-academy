// Write a function that takes two arrays as arguments and
//returns a new array containing all of the items
//  in the two arrays passed to it.

(function () {
    const mixOfTwoArrays = (arr1, arr2) => [...arr1, ...arr2];

    let firstArray = [1, 2, 3, 4, 5];
    let secondArray = [6, 7, 8, 9, 10];
    console.log(mixOfTwoArrays(firstArray, secondArray));
    console.log(firstArray);
    console.log(secondArray);
})();
