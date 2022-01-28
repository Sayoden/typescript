let t2 = ["Bonjour", "Merci", "Mr.Sheeesh", "Aurevoir"];

function afficher(t2: string[]) : void {
    t2.forEach(value => {
       console.log(value);
    });
    console.log("=============");
};

afficher(t2);

t2.push("Test");

afficher(t2);

t2.unshift("Test2");

afficher(t2);

function trier(tab: string[]) : string[] {
    return tab.sort();
}

afficher(trier(t2));

const t2bis = [];
t2bis.push("test");

console.log(t2bis.sort());