// SPREAD

const arr = [1, 2, 3]
const arr2 = [...arr, 4]
const arr3 = [...arr.filter(num => num !== 2)]

console.log(arr3)

const person1 = {
    name: 'Krystian',
    age: 36
}

const person2 = {
    ...person1,
    email: 'brad@gmail.com'
}

console.log(person2)