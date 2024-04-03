//Write a program that prints all the male people’s first name given a complex object 

let people = [{
    firstName: "Sagar",
    gender: "male"
},{
    firstName: "Sunny",
    gender: "male"
},{
    firstName: "Priya",
    gender: "female"
},{
    firstName: "Pragya",
    gender: "female"
},{
    firstName: "Akshansh",
    gender: "male"
}];

people.forEach(element => {
if(element.gender == "male"){
    console.log(element.firstName);
}    
});