// DESTRUCTURING

const profile = {
    name: 'John Doe',
    address: {
        street: '40 Main Street',
        city: "Boston"
    },
    hobbies: ['movies', 'music']
}

const {
    name,
    address,
    hobbies
} = profile

const {
    street,
    city
} = profile.address

console.log(name, address.street, hobbies[0])

console.log(street, city)