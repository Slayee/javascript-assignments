// - Convert an array of numbers into a new array with every element Multiplied by 2

let arr = [1, 2, 3, 4, 5];

//best example is this mainly this syntax is what is going to be used.

let sqr = arr.map((element) => {
    return element*element
});


// let sqr = arr.map((element,index) => {
//     console.log(index);
//     return element*element
// });

// let sqr = arr.map((element,index, array) => {
//     console.log(index);
//     console.log(array);
//     return element*element
// });

console.log(sqr);