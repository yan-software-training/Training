// Typescript types

// Primitive types
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

enum enu { name, age }                                                  // Enum
