// Write a program to print the biggest number in an number

let number = [ 100, 23, 123, 87, 25];
let biggest = 0;

for(i=0; i < number.length; i++){
    if(number[i]> biggest){
        biggest = number[i];
    }
}

console.log(biggest);