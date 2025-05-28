/*  
        ** Topics **
    1. SingleTone vs Literal Object
    2. Create an Object and access the value
    4. How to access nested objects values?
    5. Object methods: [ Object.create(), Object.assign(), Object.keys(), Object.values(), Object.entries(),Object.freeze()  ]
    6. Destructing Objects
    7. Understanding json
*/

// singleTone object
const singleToneObj = new Object()
// console.log(singleToneObj)

// Object Literal
const myObjectLiteral = {}
// console.log(myObjectLiteral)

// Create an new Object
let userInformation = {
    username: 'susovan',
    "email": 'susovan@gmail.com',
    password: 'huhfhffhregndsfbjgef82jvknsd',
    isActive: true,
    lastActive: '2025-05-24',
    totalLoggedIn: 6,
}

// accessing
// console.log(userInformation.username)

// OR

// console.log(userInformation['email'])

// Updating
userInformation.username = 'dipa'
// console.log(userInformation)

// Nested Object 
const user = {
    username: {
        firstName: {
            middleName: {
                lastName: 'Das'
            }
        }
    }
}

// console.log(user.username.firstName.middleName.lastName)

// Destructuring Object

const userInfo = { username: 'ex', email: 'ex@gmail.com', isActive: true }
const { username, email, isActive } = userInfo
// console.table([username, email, isActive])

// Object Methods
const product = Object.create({ productId: 1, productName: 'Iphone', price: 333 })
// console.table([product.productId, product.productId, product.price])

// console.log(Object.assign( userInformation, product ))

Object.freeze(userInfo) // ReadOnly
userInfo.totalLoggedIn = 10
// console.log(userInfo)

// Json
    
    /*
[
    { userId: 1, username: 'example1', email: 'example1@gmail.com' },
    { userId: 2, username: 'example2', email: 'example2@gmail.com' },
    { userId: 3, username: 'example3', email: 'example3@gmail.com' },
]
    */