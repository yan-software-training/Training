// Interface
type Type = 'one' | 'two'                                             // Type vs Interface
type computedType = {
    [key in Type]: string
}
const keyType: computedType = { // Type can use computed while interface cant
    one: "1",
    two: "2"
}
console.log(keyType);

interface Interface {
    name: string,
    age: number
}

interface Interface {
    gender: boolean
}

const mergeInterface: Interface = { // Interface can merge while type cant
    name: "Duy",
    age: 1,
    gender: true
}
console.log(mergeInterface);

interface extendInterface extends Interface {                           // Extending interface
    fan: string,
    sound(): void,                                                      // Interface declaration + hybrid types
}

const testExtendInterface: extendInterface = {
    name: "Duy",
    age: 1,
    gender: true,
    fan: "goat",
    sound: function () {
        console.log("Siuuuu");
    }
}
console.log(testExtendInterface);


// Advance types
type mappedType<T> = {                                                  // Mapped type
    [key in keyof T]: T[key];
};

let obj2 = { x: 10, y: 20 };
let readObj: Readonly<typeof obj2> = obj2;
console.log(readObj);

type conditionType<T, Key> = T extends Key ? T : Key                    // Extends type

type name = "Duy"                                                       // Literal type
let human: name = "Duy"
console.log(human);

type age = `age 1`;                                                     // Template literal type
let ageNumber: age = `age 1`

type recurType<T> = {                                                   // Recursive type
    age: T
}

let testRecurType: recurType<number> = {
    age: 1
}
console.log(testRecurType);
