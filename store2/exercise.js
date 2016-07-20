var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable.
var dates = [];
for(var i=0; i<store2['sale dates']['Banana Bunches'].length; i++){
	dates.push(store2['sale dates']['Banana Bunches'][i])
}
console.log(dates)

// What built-in array property would you use to determine how many sale dates there for store2's 'Banana Bunches'?
console.log(store2['sale dates']['Banana Bunches'].length)
//.length

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Why or why not?

var wafers = store2['inventory prices']['Mint Wafers']
console.log(wafers)
//>>logs 1.09
var wafers = 2.98
console.log(wafers)
//>>logs 2.98
console.log(store2['inventory prices']['Mint Wafers'])
//>>logs 1.09
wafers = store2['inventory prices']['Mint Wafers'];
console.log(store2['inventory prices']['Mint Wafers'])
//>>logs 2.98


// Set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. Use pop to remove one of the sale dates for store2's Caramel Twists.

var pbbp = store2['sale dates']['Peanut Butter Buttered Peanuts']
console.log(pbbp)


var price = price.pop(store2['sale dates']['Caramel Twists'])

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.

var dates = store2['sale dates']['Caramel Twists'];
console.log(dates);

var caramelTwistsObject = {};
for (var i=0; i<caramelTwistsObject.length; i++) {
	if (caramelTwistsObject[dates[i]]) {
		++caramelTwistsObject[dates[i]];
	}
	else { caramelTwistsObject[dates[i]] = 1 }
}

console.log(caramelTwistsObject);

// Iterate over store2's sale dates data to find which day had the most total number of sales. How did you calculate this?

var keys = Object.keys(store2['sale dates']);

var datesOfSales = {};

for (var i=0; i<keys.length; i++) {
	dates = store2['sale dates'][keys[i]];
	for (var j=0; j<dates.length; j++) {
		if (datesOfSales[dates[j]]){
			++datesOfSales[dates[j]];
		}
		else { datesOfSales[dates[j]] = 1}
	}
}
console.log(datesOfSales);

/////////// CHALLENGE ///////////

// Create an object containing the amounts that store2 made by selling each type of candy.
