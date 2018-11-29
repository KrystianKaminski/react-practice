// CLASSES

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age}`
    }
}

const person1 = new Person('John', 33)
const person2 = new Person('Sarah', 28)

// console.log(person1.name)
// console.log(person2.name)
// console.log(person1.age)
// console.log(person2.age)

// console.log(person1.greet())
// console.log(person2.greet())

// SUBCLASSES

class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age)
        this.balance = balance
    }

    info() {
        return `${this.name} owes ${this.balance}.00`
    }
}

const customer1 = new Customer('Kevin', 32, 300)

console.log(customer1.name)
console.log(customer1.info())