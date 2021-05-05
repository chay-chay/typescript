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
const add = (num1: number, num2:number) => {
    return num1 + num2
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


// nested 