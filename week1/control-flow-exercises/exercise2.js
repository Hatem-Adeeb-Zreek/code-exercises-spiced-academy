var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA",
};
var b = {};
for (var key in a) {
    b[a[key]] = key;
}
console.log("a = ", a);
console.log("b = ", b);
