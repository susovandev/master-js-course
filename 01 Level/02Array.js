/*  
        ** Topics **
    1. Declare an array 
    2. Access an array element
    3. Methods: [
        length
        at(),
        concat(),
        includes(),
        indexOf(),
        push(),
        pop(),
        unshift(),
        shift(),
        reverse(),
        toString(),
        slice(),
        splice()
    ]
*/
// 1. Declare an array

const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 10]
const secondExampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// 2. Access an array element

console.log(exampleArray[0]) // 1
console.log(exampleArray[6]) // 7
// console.log(exampleArray[100]); // undefined

// 3. Important Methods 
// console.log(exampleArray.at(2))
// console.log(exampleArray.concat(secondExampleArray))
// console.log(exampleArray.includes(5))
// console.log(exampleArray.indexOf(2))
console.log(exampleArray.length)

// Add new element to the array

// Type: 1 (Special Case)
exampleArray[10] = 500 
// console.log(exampleArray)

// Type: 2 (Last Position)
console.log(exampleArray.push(100))
// console.log(exampleArray);

// Type: 3 (First Position)
console.log(exampleArray.unshift(200))
// console.log(exampleArray);


// Remove element from array
exampleArray.pop() 
exampleArray.shift()

// console.log(exampleArray.reverse())
// console.log(exampleArray.reverse())
// console.log(exampleArray.toString())
console.log(exampleArray.slice(2, 8))
console.log(exampleArray)

console.log('--------------------')

console.log(exampleArray.splice(2, 8));
console.log(exampleArray);
