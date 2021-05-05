// string
// number 
// boolean

// array
// object

// all letters are lowercase
// first type that we set it will be that type

// Literl type
const myName = "Chay"

// number type
let age = 26;
age = "25"; // it will warn about type

// string type
let favColor: string;
favColor = "pink"

// obj type
type Person = {
    name: string,
    age: number,
    hobbies: string[],
    favNumbers: Array<number> // same with number []
}

const person: Person = {
    name: "Chay",
    age: 20,
    hobbies: ['cooking', 'eating'],
    favNumbers: [1,2,3,4,5]
}


// set type for number
// num2? - means optional
const add = (num1: number, num2?:number) => {
    if (!num2) {
        return num1;
    } else {
        return num1 + num2;
    }
}

const result = add(1, 4);

console.log(result) // 5

// union type
type Name = string | number;
const friend: Name = "Chay"
const friend2: Name = 50;

// Intersection
type Kid= {
    name: string,
    age: number;
}

type Nickname= {
    nickname: string;
}

const human: Kid & Nickname = {
    name: "Dek",
    age: 5,
    nickname: "B"
}


// nested obj
type NestedObject = {
    mom: { name: string; age: number; children: string[]; x:{key1: string}}
}

// Literal - set specific value (we can set only female too)
type Gender = "female" | "male";
const bay: Gender = "male"

// return type
const add2 = (num1: number, num2:number): number => {
   return num1 + num2
}

const result2 = add(1, 4);

console.log(result) // 5


// skip Tuple and ENUM
// void - means function no return
// never - no return
const greeting = (text: string): void => {
   console.log(text)
}

const greeting2 = (text: string): never => {
    throw new Error ("Error")
 }

 // Interface 
type MyType = string | boolean | "Hi"
interface AdultPerson {
    name: string;
    age: number;
    isMarried: boolean;
    // greeting: (text: string) => void
    // add: (num1: number, num2: number) => number
}
interface RichPerson {
    isRich: boolean;
}
 
type Mix = AdultPerson & RichPerson;
class Family implements AdultPerson, RichPerson {
    name = "";
    age = 0;
    isMarried = false;
    isRich = true;


    constructor(name: string, age: number, isMarried: boolean, isRich: boolean) {
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        this.isRich = isRich;
    }
}