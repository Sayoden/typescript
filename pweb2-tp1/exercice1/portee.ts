console.log("=== Test 1 : portee let-let");

var langage1 = 'typescript';
{
    var langage1 = 'javascript';
    console.log("Langage 1: " + langage1);
}

console.log("Langage 2: " + langage1);