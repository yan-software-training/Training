// Typescript types

// Types
let base: any;                                                          // Any

let bool: boolean = true;                                               // Boolean
console.log(bool ? "true" : "false");

let num: number = 1;                                                    // Number
console.log(num);

let str: string = "123";                                                // String
console.log(str);

let voi: void;                                                          // Void
console.log(voi);

let undef: undefined;                                                   // Undefined
console.log(undef);

let nul: null = null;                                                   // Null
console.log(nul ? "Not null" : "Null");


// Object types
interface inter {                                                       // Interface
    name: string,
    age: number,
    gender?: boolean
}

function getInterface(inter: inter): inter {
    inter.age = 1
    inter.name = "Duy"
    return inter
}

class cla {                                                             // Class
    name: string;
    age: number;
    gender?: boolean;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
}

enum enu { name = "Duy", age = 1, gender }                              // Enum
console.log(enu.name + enu.age + enu.gender);


let arr: string[] = []                                                  // Array
arr.push("1", "2", "3")
arr.map((i, index) => {
    console.log(`item + ${i} with index ${index}`);
})

type tup = [string, number]                                             // Tuples
const person: tup = ["Duy", 1]

const obj = {                                                           // Object
    name: "Duy",
    age: 1
}
console.log(obj.name + obj.age);

function infiniteLoop(): never {                                        // Never
    while (true) { }
}
// infiniteLoop()

function unknownType(unk: unknown) {                                    // Unknown
    console.log(unk);
}
unknownType("1")

let anyCheck: any = "check"                                             // As
console.log((anyCheck as string).length);


// Combining types
class cr7 {
    vapco() {
        console.log("Penalty");
    }
    penalty() {
        console.log("Khoc");
    }
}

const ricon = new cr7()                                                 // Instanceof
if (ricon instanceof cr7) {
    console.log("He is ricon");
} else {
    console.log("He is goat Messi");
}

console.log(typeof ("123"));                                            // Typeof

console.log(num === 1 ? true : false);                                  // Equality

console.log(num === 1 && num > 2 ? true : false);                       // Truthiness

function checkNumber(number: number) {                                  // Type predicates
    return typeof number === "number" ? true : false
}
console.log(checkNumber(1));

let unionTypes: number | string                                         // Union types

type first = {                                                          // Intersection types + Type aliases
    name: string,
    age: number
}
type second = {
    name: string,
    age: number
}
type third = first & second
type takeKey = keyof third                                              // Keyof operator