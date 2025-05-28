/*  
        ** Topics **
    1. Iterative Array Method's: [
    find(),
    findIndex(),
    forEach(),
    map(),
    filter(),
    reduce(),
    every(),
    some()
    ]

    2. Additional concept: Array.from(), Array.isArray(), Array.of()
*/

const users = [
  { id: 1, name: "Alice", age: 22, isActive: true },
  { id: 2, name: "Bob", age: 17, isActive: false },
  { id: 3, name: "Charlie", age: 30, isActive: true },
  { id: 4, name: "David", age: 25, isActive: false },
  { id: 5, name: "Eve", age: 19, isActive: true },
];

// Find()
// 1.Find the first user who is under 20 years old.
const user = users.find((user) => user.age < 20);
// console.log(user)

// 2.Find the first inactive user.
const inactiveUser = users.find((user) => user.isActive === false);
// console.log(inactiveUser)

// FindIndex()

// 1.Find the index of the first user whose name is "Charlie".
const name = users.findIndex((user) => user.name === "Charlie");
// console.log(name)

// 2.Find the index of the user whose isActive status is false and age is more than 24.
const userName = users.findIndex(
  (user) => user.isActive === false && user.age > 24
);
// console.log(userName)

// map()

// 1.Create a new array of user names only.
const newArray = [];
users.map((user) => newArray.push(user.name));

// console.log(newArray)

// 2.Create a new array of objects with only name and isAdult (age ≥ 18) keys.
const newUserInfo = [];
users.map((user) => {
  if (user.age > 18) {
    const newUser = { name: user.name, age: user.age };
    return newUserInfo.push(newUser);
  }
  return [];
});

// console.log(newUserInfo)

// map()

// Get all users who are active.
const activeUser = users.filter((user) => user.isActive === true);
// console.log(activeUser)

// Get all users who are 18 or older.
const olderUser = users.filter((user) => user.age >= 18);
// console.log(olderUser);

// Get all users whose name starts with the letter 'A' or 'D'.
const userWithName = users.filter((user) => {
  if (user.name.startsWith("A") || user.name.startsWith("D")) {
    return user;
  }
});
// console.log(userWithName);

// reduce()

// 1.Find the total age of all users.
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge);

// 2.Count how many users are active.
const calculateActiveUser = users.reduce(
  (count, user) => (user.isActive ? count + 1 : count),
  0
);
// console.log(calculateActiveUser);
// 3.Create an object with the count of active and inactive users: { active: 3, inactive: 2 }

const calculateActiveInactiveUser = users.reduce(
  (count, user) => {
    user.isActive ? count.active++ : count.disActive++;
    return count;
  },

  { active: 0, disActive: 0 } // Default value is an object
);
// console.log(calculateActiveInactiveUser);

// every()

// Check if every user is over 18.
const u = users.every((user) => user.age >= 18);
// console.log(u)

// Check if all users are active.
const userActive = users.every((user) => user.isActive === true);
// console.log(userActive);

// some()

// Check if there’s any inactive user.
const Iuser = users.some(user => user.isActive === true)
// console.log(Iuser)

// Check if someone is under 18.
const Iuser18 = users.some((user) => user.age <= 18);
// console.log(Iuser18);


// Array.isArray()
const calculateSum = (array) => {
  if (Array.isArray(array)) {
    return array.reduce((acc, item) => acc + item, 0);
  } else {
    return `It's not an array`
  }
  
}

const InvalidInput = '123'
const numbersArray = [1, 2, 3]
// console.log(calculateSum(InvalidInput))
// console.log(calculateSum(numbersArray))

// Array.from()
let myName = 'susovan'
let myObj = { name: 'Susovan', email: 'susovandas985@gmail.com' }// 📝 Special Case
let myObj2 = {name: 'dipanwita', email: 'dipa@gmail.com'}
let myObj3 = {name: 'arijit', email: 'arijit@gmail.com'}
// console.log(Array.from(myObj))

//Array.of()

// const 
console.log(Array.of(myObj, myObj2, myObj3))