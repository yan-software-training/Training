// Class
class testClass {                                           // Constructor params
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

class testClassModifier {                                   // Access modifier
    private animal: string

    constructor(animal: string) {
        this.animal = animal
    }

    public bark(): string {
        return "Woof"
    }

    protected gender(): string {
        return "Male"
    }
}

class testClassModifier2 extends testClassModifier {
    public calling(): string {
        return this.gender()
    }
}

const classModifier = new testClassModifier("Dog")
const classModifier2 = new testClassModifier2("Dog")
console.log(classModifier.bark());
console.log(classModifier2.calling());

abstract class testAbstract {                               // Abstract class + Inheritancs + Polymorphism
    private animal: any

    constructor(animal: string);                            // Constructor overloading

    constructor(animal: number);

    constructor(animal: any) {
        this.animal = animal
    }

    abstract moving(): string
}

class callingTestAbstract extends testAbstract {
    moving(): string {
        return "Run"
    }
}
const abstractNew = new callingTestAbstract("Dog")
console.log(abstractNew.moving());

class overideAbstract extends callingTestAbstract {         // Overide class
    moving(): string {
        return "Walk"
    }
}
const abstractNew2 = new overideAbstract("Dog")
console.log(abstractNew2.moving());


// Utility types
interface testPartial {                                        // Partial
    name: string
    age: number,
    readonly gender?: boolean                                  // Readonly
}

function newPartial(partial: Partial<testPartial>): testPartial {
    return {
        name: "Duy",
        age: 1
    }
}
console.log(newPartial({}));

type testPick = Pick<testPartial, 'name'>                       // Pick
const dataTestPick: testPick = {
    name: "Duy"
}
console.log(dataTestPick)

type testOmit = Omit<testPartial, 'name'>                       // Omit
const dataTestOmit: testOmit = {
    age: 1
}
console.log(dataTestOmit);

type fan = 'cr7' | 'messi' | 'CongPhuong'                       // Record
const testRecord: Record<fan, testPartial> = {
    cr7: { name: "Ronaldo", age: 18 },
    messi: { name: "Goat", age: 1 },
    CongPhuong: { name: "ChickenFried", age: 18 },
}
console.log(testRecord);

type testExclude = Exclude<fan, 'cr7' | 'CongPhuong'>           // Exclude

type testExtract = Extract<fan, string>                         // Extract

const promise: Promise<string> =                                // Awaited
    new Promise((resolve, reject) => {
        console.log("Promise Run");
        resolve("Done")
    })

type testAwaited = Awaited<typeof promise>

function Params(name: string, age: number): Parameters<typeof Params> {         // Parameters
    return [name, age]
}

type testParams = Parameters<typeof Params>

type testNonNullAble = NonNullable<fan>                         // NonNullAble

type testReturnType = ReturnType<(arg0: fan) => void>           // ReturnType

type testInstanceType = InstanceType<typeof testClass>          // InstanceType