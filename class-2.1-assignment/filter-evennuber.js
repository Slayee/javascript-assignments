// Convert an array of numbers into a new array with only the even elements

let arr = [2, 3, 4, 5, 6, 7];

let even = arr.filter((element) => {
    if(element%2 == 0)
        return element;
});

console.log(even);