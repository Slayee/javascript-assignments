//Write a program that reverses all the elements of an array

let numbers = [ 23, 24, 25, 26, 27 ];

// let rev = numbers.reverse();
let reverse = [];
for(let i = numbers.length-1, j=0; i>=0, j<numbers.length; i--,j++){
    reverse[j]=numbers[i];
}

reverse.forEach(element => {
    console.log(element);
});
