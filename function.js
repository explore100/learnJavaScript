
const myArrow = (x, y) => {
    console.log(x + y);
}

//foreach loop in array
let arr = ["lalitpur", "butwal", "chitwan"];
arr.forEach((value, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

// //square
let nums = [2, 3, 4, 5];
nums.forEach((num) => {
    console.log(num * num);
})

//map
let number = [34, 43, 24];  //way 1
number.map((val) => {
    console.log(val);
})
way2
let newNumber = number.map((val) => {
    return val;
})
console.log(newNumber); 