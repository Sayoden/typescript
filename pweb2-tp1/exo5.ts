const MAX:number = 100;

function getRandomInt() {
    return Math.floor(Math.random() * MAX);
}

function creerTableau (nbElements: number): number[] {
    tab = []
    for (let i = 0; i < nbElements; i++) {
        tab.push(getRandomInt());
    }
    return tab;
};

console.log("==Création d'un tableau d'entiers : ");

let tab = creerTableau(10);
console.log(tab);

function rechercheClassique(tab:number[], element:number) : boolean {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == element) {
            return true;
        }
    }
    return false;
}



console.log("========== Test si un élement appartient au tableau de sheeesh ===========");
let t1 = creerTableau(100);
console.log(t1);
console.log(rechercheClassique(t1, t1[7]));

function recherche(element) : boolean {
    return tab[7] == element;
};

console.log(t1.some(recherche, tab[7]));

console.log("=========== Utilisation de some et any =================");

function estPair(element) : boolean {
    return element % 2 == 0;
}

console.log(t1.every(estPair));
console.log(t1.some(estPair));

console.log("========== Test tous les éléments sont triés ? avec every =============");

function plusPetitQueLeSuivant(valeurInitial, valeurSuivante) : boolean {
    return valeurInitial < valeurSuivante;
}

let x = t1.every((value, index, array) => {
    console.log("Valeur: " + value + " et index + 1: " + array[index + 1]);
    if (array.length <= index + 1) {
        console.log(plusPetitQueLeSuivant(value, array[index + 1]));
        return plusPetitQueLeSuivant(value, array[index + 1]);
    } else {
        return true;
    }
});

console.log(x);

t1.sort();

console.log(x);

