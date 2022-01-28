var MAX = 100;
function getRandomInt() {
    return Math.floor(Math.random() * MAX);
}
function creerTableau(nbElements) {
    tab = [];
    for (var i = 0; i < nbElements; i++) {
        tab.push(getRandomInt());
    }
    return tab;
}
;
console.log("==Création d'un tableau d'entiers : ");
var tab = creerTableau(10);
console.log(tab);
function rechercheClassique(tab, element) {
    for (var i = 0; i < tab.length; i++) {
        if (tab[i] == element) {
            return true;
        }
    }
    return false;
}
console.log("========== Test si un élement appartient au tableau de sheeesh ===========");
var t1 = creerTableau(100);
console.log(t1);
console.log(rechercheClassique(t1, t1[7]));
function recherche(element) {
    return tab[7] == element;
}
;
console.log(t1.some(recherche, tab[7]));
console.log("=========== Utilisation de some et any =================");
function estPair(element) {
    return element % 2 == 0;
}
console.log(t1.every(estPair));
console.log(t1.some(estPair));
console.log("========== Test tous les éléments sont triés ? avec every =============");
function plusPetitQueLeSuivant(valeurInitial, valeurSuivante) {
    return valeurInitial < valeurSuivante;
}
var x = t1.every(function (value, index, array) {
    console.log("Valeur: " + value + " et index + 1: " + array[index + 1]);
    if (array.length <= index + 1) {
        console.log(plusPetitQueLeSuivant(value, array[index + 1]));
        return plusPetitQueLeSuivant(value, array[index + 1]);
    }
    else {
        return true;
    }
});
console.log(x);
t1.sort();
console.log(x);
var y = t1.filter(function (value) { return value % 2 == 0; });
var z = function (x) {
    return t1.filter(function (value) { return value < x; });
};
var a = t1.map(function (x) { return x * 2; });
var b = t1.reduce(function (previousValue, currentValue) { return previousValue + currentValue; });
console.log("========= Exo5.5 ===========");
console.log(t1);
console.log(y);
console.log(z(10));
console.log(a);
console.log(b);
var reducePonderee = function (acc, current) {
    acc[0] += current[0];
    acc[1] += current[1] * current[2];
    return acc;
};
var notes = [[1, 10], [2, 15], [1, 5]];
var resultat = notes.reduce(reducePonderee, [0, 0]);
console.log("Moyenne pondérée des éléments du tableau ", notes, ' = ', (resultat[1] / resultat[0]));
