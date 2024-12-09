// Function + overloading
function testFunc(num: number, str: string): number;

function testFunc(num: string, str: number): string;

function testFunc(num: any, str: any): any {
    return num + str;
}
testFunc(1, "1")
testFunc("1", 1)

const testArrowFunc = (num: string, str: number): string => {
    let total = num.toString() + str
    return total
}

testArrowFunc("2", 2)


//  Generics + constraints
function Gene<T>(typeGene: T): T {
    return typeGene
}
console.log(Gene<string>("Duy"));

type constraints = {
    name: string,
    age: number
}

function GeneConstraints<T extends constraints>(typeConstraints: T): T {
    return typeConstraints
}
console.log(GeneConstraints<constraints>({ name: "Duy", age: 1 }));