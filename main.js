// CONST & LET

let name = 'John'
let test;

name = 'Jack'

const person = {
    name: 'John',
    age: 33
}

person.name = 'Jack'


const nums = [1, 2, 3, 4]
nums.push(5)


// ARROW FUNCTIONS

// function sayHello() {
//     console.log('Hello')
// }

const sayHello = name => console.log(`Hello ${name}`)


// sayHello('Krystian')

const fruits = ['Apples', 'Oranges', 'Grapes']

// FOR EACH

// fruits.forEach(fruit => console.log(fruit))

// MAP

const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase())

// console.log(singleFruit)

// FILTER

const people = [{
        id: 1,
        name: 'Karen'
    },
    {
        id: 2,
        name: 'Bob'
    },
    {
        id: 3,
        name: 'Sharon'
    }
]

const people2 = people.filter(person => person.id != 2)
console.log(people2)