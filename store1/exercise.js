var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// How would you access the value '4.63' from store1?
console.log(store1['2015-01-08'][0][1])

// How would you access how many 'Mint Wafers' were sold on January 7th?
console.log("There were no Mint Wafers sold on January 7th")
console.log(store1['2015-01-06'][1][2])

// Produce an array of the date keys in store1's data.
console.log(Object.keys(store1))

// *********** LOOPING OVER DATA *********** \\

// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
var count= [];
for(var i=0; i<store1['2015-01-08'].length; i++){
  count.push(store1['2015-01-08'][i][0]);
}
console.log(count)

// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?

var count=0;
for(var i=0; i<store1['2015-01-10'].length; i++){
  count += (store1['2015-01-10'][i][2]);
}
console.log(count)

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
var dates = Object.keys(store1)
console.log(dates)

// Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.

//not done yet

var candyType = [];
var price = [];
var purchased = [];
var date = "";

for (var i in dates) {
  dates = date[i];
  candyType.push(store1[date][0]);
  price.push(store1[date][1]);
  purchased.push(store1[date][2]);
}

console.log("The candy: " + candyType)
console.log("The candy prices: " + price)
console.log("The amount that was purchased: " + purchased)

// Use a loop to calculate the total number of candies sold at store1.

//not done yet
var candies =[];
for(var i=0; i<store1.length; i++) {
  candies.push(store1['2015-01-10'].[i][2])
}
console.log(candies);

// In the previous exercise, where did you have to initialize the counter variable? Why?



// *********** CHALLENGE *********** \\

// Create an array of the candies sold by store1 on January 10th.

var count=0;
for(var i=0; i<store1['2015-01-10'].length; i++){
  count += (store1['2015-01-10'][i][2]);
}
console.log(count);
