//Problem 1
var ages =[3, 9, 23, 64, 2, 8, 28, 93];


//Problem 1.a.
let ageDiff = 0;
ageDiff = ages[ages.length -1] - ages[0];
console.log(ageDiff);

//Problem 1.b.
ages.push(50);
ageDiff = ages[ages.length -1] - ages[0];
console.log(ageDiff);

//Problem 1.c.
var totalAge = 0;
for (let i =0; i < ages.length; i++){
    totalAge += ages[i];    
}
var avgAge = totalAge / ages.length;
console.log(avgAge);

// Problem 2
let names = ['Sam', 'Tommy', 'Tim','Sally', 'Buck', 'Bob'];

//Problem 2.a
let nameLength = 0;
let totalLength = 0;
for( let i = 0; i < names.length; i++){
    totalLength += names[i].length;
    nameLength = names[i].length;
}

console.log(totalLength/nameLength);

//Problem 2.b
let allNames = '';
for (let i = 0; i < names.length; i++){
    allNames += names[i] + ' ';
}
console.log(allNames);

//Problem 3
console.log(names[names.length - 1]);

//Problem 4
console.log(names[0]);

//Problem 5
let nameLengths = [];
for( let i = 0; i < names.length; i++){
    nameLengths[i] = names[i].length;

}
console.log(nameLengths)


//Problem 6
let nameSum = 0;
for( let i = 0; i < names.length; i++){
    nameSum += names[i].length;
}
console.log(nameSum);


//Problem 7

function repeat(word,n){
    let con = word;
    for (let i =1; i < n; i++){
        con = con.concat(word);
    }
    return con;
}
console.log(repeat('Hello',3));

// Problem 8

function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

console.log(fullName('Peter' , 'Parker'));


//Problem 9

let sum = 0;
function sumGreater100(array){
    for (let i=0; i<array.length;i++){
        sum = sum + array[i];
    }
        if (sum > 100){
            return true;
        }
        else{
           return false;
        }

}

console.log(sumGreater100([10,20,40]));
 
// Problem 10

let total = 0;
function avgArr(array){
    for(let i=0; i < array.length; i++){
        total += array[i];
    }
    return total/array.length;
}

console.log(avgArr([23,22,11,4]));


//Problem 11

function avgCompare(array1 , array2){
    if (avgArr(array1) > avgArr(array2)){
        return true;
    }else{
        return false;
    }
}

 console.log(avgCompare([10,20.30],[10,10,10]));



 // Problem 12

 function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside == true && moneyInPocket > 10.50){
        return true;
    }
    else{
        return false;
    }
 }

 console.log(willBuyDrink(false, 11.4));

 
 
 //Problem 13 - Program to choose random dinner for you, when you do not know what you want for dinner.

 function whatsForDinner(listOfFood){
    let randomDinner = Math.floor(Math.random() * listOfFood.length); // this code returns a random index value from the array list
    let dinner = listOfFood[randomDinner] // this code will select the food form the array list using the generated random index value
    return dinner;
    
}

listOfFood = ['Pasta', 'Lasagna', 'Ramen', 'Tacos', 'Pizza','Burgers','Rice and Curry', 'Meatloaf', 'Pork Chops', 'Sushi'] 

console.log('Lets have ' + whatsForDinner(listOfFood) + ' for dinner.');

