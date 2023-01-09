/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log(john, mary, joe);
//ususally you have to add the ages to the names 

let [john, mary, joe] = ages;
console.log(jogn, mary, joe);
//the console then prints the three ages above and it assumes the names are for the ages array

//
// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicial: "accountant"
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);
//this then prints the jobs of the three people onto the console


// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanses"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
// the console log will print english and french from the array

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);
// the console will print spanish and german, and the commas at the start push it forward in the array

let lanuages2 = {
    first language: "english",
    second language: "french",
    thrid language: "german",
    firth language: "japanese"
}
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);
//condole will log english and german


//
// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"]
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);
//console wil log apple, orange and then in an array it has banana, pach and cherry
