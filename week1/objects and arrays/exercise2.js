function reversed(arr) {
    var clonedArr = arr.slice();
    var reversedArr = clonedArr.reverse();
    return reversedArr;
}

var originalArr = ["A", "B", "C", "D", "E"];
console.log("originalArr:", originalArr);
console.log("reversedArr:", reversed(originalArr));
// to make sure the originalArr is unchanged
console.log("originalArr:", originalArr);
