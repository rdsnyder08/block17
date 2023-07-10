
const coffeeMenu = require("./coffee_data.js")

console.log(coffeeMenu)

//print array of all drinks on menu
nameOfDrinks = []
coffeeMenu.forEach (element => nameOfDrinks.push(element))
console.log(nameOfDrinks)

//Print an array of drinks that cost 5 and under.

 const under5 = coffeeMenu.filter(element => element.price <=5)

 console.log(under5)

 //Print an array of drinks that are priced at an even number.

 const even = coffeeMenu.filter(element => element.price %2 === 0)

 console.log(even)

 //Print the total if you were to order one of every drink.
 const menuPrice = coffeeMenu.reduce((accumulator , currentValue) => accumulator + currentValue.price, 0);
 console.log(menuPrice)

 //Print an array with all the drinks that are seasonal.
 const seasonal = coffeeMenu.filter(element => element.seasonal === true)

 console.log(seasonal)

 //Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
 let imported = coffeeMenu.filter(element => element.seasonal === true)

imported.every(element => element.name = element.name + " with imported beans")

console.log(imported)
