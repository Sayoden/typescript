let t1 = [10, 2, 55, 9, 43];

for (let i = 0; i < t1.length; i++) {
    console.log("t1 (" + i + "): " + t1[i]);
}

for (const t1Key in t1) {
    console.log("For in: " + t1Key);
}

for (const number of t1) {
    console.log("For of: " + number);
}

t1.forEach((v: number): void => {
   console.log("Foreach: " + v);
});