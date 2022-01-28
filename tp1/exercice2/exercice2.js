var f1 = function (x, y) {
    return x < y;
};
function f2(x, y) {
    if (!y) {
        return true;
    }
    return x < y;
}
function f3(args) {
    console.log(args.length);
    for (var i = 0; i < args.length; i++) {
        console.log("argument " + i + " : " + args[i]);
    }
}
console.log(f1("4", "3"));
console.log(f2("3"));
console.log(f3(["1", "2", "3"]));
var tab = [1, 3, 2, 5, 4];
var x = tab.sort();
console.log(x);
x = tab.sort(function (v1, v2) {
    return v1 - v2;
});
console.log(x);
x = tab.sort(function (v1, v2) {
    return v1 - v2;
});
console.log(x);
x = tab.sort(function (v1, v2) { return v1 - v2; });
console.log(x);
