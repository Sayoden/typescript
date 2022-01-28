var t2 = ["Bonjour", "Merci", "Mr.Sheeesh", "Aurevoir"];
function afficher(t2) {
    t2.forEach(function (value) {
        console.log(value);
    });
    console.log("=============");
}
;
afficher(t2);
t2.push("Test");
afficher(t2);
t2.unshift("Test2");
afficher(t2);
function trier(tab) {
    return tab.sort();
}
afficher(trier(t2));
var t2bis = [];
t2bis.push("test");
console.log(t2bis.sort());
