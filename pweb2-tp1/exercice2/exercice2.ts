let f1 = function (x: string, y: string): boolean {
    return x < y;
}

function f2(x: string, y?: string): boolean {
    if (!y) {
        return true;
    }

    return x < y;
}

function f3(args: string[]): void {
    console.log(args.length);
    for (let i = 0; i < args.length; i++) {
        console.log("argument " + i + " : " + args[i]);
    }
}

console.log(f1("4", "3"));
console.log(f2("3"));
console.log(f3(["1", "2", "3"]))

let tab = [1, 3, 2, 5, 4]
let x = tab.sort();

console.log(x);


x = tab.sort(function (v1: number, v2: number): number {
    return v1 - v2;
});

console.log(x);

x = tab.sort((v1: number, v2: number) :number => {
    return v1 - v2;
});

console.log(x);

x = tab.sort((v1: number, v2: number) :number => v1 - v2);

console.log(x);
