let fruits = ["apple", "guva", "pineapple", "orange", "kiwi"];
console.log(fruits)

// looping in aarrya
let fruit = ["apple", "guva", "pineapple", "orange", "kiwi"];
for (let idx = 0; idx < fruit.length; idx++) {
  console.log(fruit[idx]);
}

//for of loop in array
let cities = ["lalitpur", "kathmandu", "dhangadhi", "pokhara"];
for (let city of cities) {
  console.log(city.toUpperCase());

}

// practise qn to calculate average marks of clsss
let merks = [23, 34, 56, 67, 59];
let sum = 0;
for (let val of merks) {
  sum = sum + val;
}
let avg = sum / merks.length;
console.log(`avg mark of class = ${avg}`);

// array methods
// push() = to add something
let foodItems = ["apple", "banana", "rice", "roti"];
foodItems.push("burger", "pizza");
console.log(foodItems);

// concat
let mobileBrand = ["apple", "samsung", "redimi", "oneplus"];
let newMobile = ["nothing", "nokia"];
let result = mobileBrand.concat(newMobile);
console.log(result);

slice;
let heroNepali = ["rajesh", "nikhil", "biraj", "ramit"];
console.log(heroNepali.slice(1, 3))

splice
let nepaliHeroin = ["rekha", "sanchita", "arunima", "barsha", "swatima"];
console.log(nepaliHeroin.splice(0, 2, "surakshya", "menuka"))