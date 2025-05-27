/*  
        ** Topics **
    1. Function Declaration and call it
    2. Function Expression
    3. Arrow Function
    4.Parameters vs Arguments
    5. Default Parameters & Rest Parameters
    6. Implicit & Explicit return
    7. return Keyword
    8. Anonymous function & IIFE (Immediately invoked function expression)
    9. Global vs Block vs Function scope
    10. Hoisting with function
*/



// 1.Declare a function 
function myFunction() {
    console.log('My basic function declaration')
}

// myFunction()

// 2.Function Expression
const myFun = function () {
    console.log('My function expression')
}
    // myFun()


//3.Arrow function
const myArrowFn = () => {
    console.log('My Arrow function')
}

// myArrowFn()

//4.Parameter and Arguments and return keyword

const myExampleArrowFn = (userName) => { // called parameters
    return `Welcome ${userName}`
}

const user = myExampleArrowFn('Susovan Das') // Called arguments

// console.log(user)

//5.Default Parameters & Rest Parameters ( return an array )

const myArrowFunctionWithDefaultParameter = (userId, username, ...userInfo) => {
    console.log(`Welcome ${username} with id : ${userId}`)
    
    userInfo.forEach(u => {
        console.log(u)
    } )
}

// myArrowFunctionWithDefaultParameter(1, 'susovan Das', {email: 'susovan@gmail.com', isStudent: true})

// 6. Implicit & Explicit return

const myImplicitArrowFunction = (username) => console.log(`Welcome ${username}`)

const myExplicitArrowFunction = (username) => {
    return console.log(`Welcome ${username}`);
}

// myImplicitArrowFunction('susovan')
// myExplicitArrowFunction('susovan')

// 8. Anonymous function || IIFE (Immediately invoked function expression)
    ; (() => {
        console.log('My anonymous function')
    })();

// 9. scope

const cricketTeam = 'INDIA'

const myNewFun = () => {
    let player = 'DHONI'
    function Ipl(yourTeamName) {
        console.log(yourTeamName);
        console.log(player)
    }
    console.log(cricketTeam)

    Ipl('Punjab')
}
// console.log(player) // not accessible outside the functional scope

// 10. Hoisting with function

/*
sayHello()

// function sayHello() {
//     console.log('Hello Hosting')
// } // Hosting✅

// const sayHello = function () {
//     console.log('Hello Hosting')
// } // Not possible ❌

// let sayHello = () => {
//     console.log('Hello hosting')
// } // Not possible ❌

*/