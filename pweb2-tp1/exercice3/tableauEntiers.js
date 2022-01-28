var t1 = [10, 2, 55, 9, 43];
for (var i = 0; i < t1.length; i++) {
    console.log("t1 (" + i + "): " + t1[i]);
}
for (var t1Key in t1) {
    console.log("For in: " + t1Key);
}
for (var _i = 0, t1_1 = t1; _i < t1_1.length; _i++) {
    var number = t1_1[_i];
    console.log("For of: " + number);
}
t1.forEach(function (v) {
    console.log("Foreach: " + v);
});
