//  Write a program prints all the even numbers in an array.

let numbers = [ 23, 24, 25, 26, 27 ];
for(i=0; i<=numbers.length; i++){
    if(numbers[i]%2==0){
        console.log(numbers[i]);
    }
}