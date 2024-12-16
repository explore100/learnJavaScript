// arithemtic operators 
// //addition 
let a = 4;
let b = 5;
let c = a + b;
console.log("a =", a, "b =", b)
console.log("a + b =", c);
console.log("a - b =", a - b)
console.log("a * b =", a * b)
console.log("a / b =", a / b)
console.log("a % b =", a % b)
console.log("a ** b =", a ** b)

// //uniary operators
a--;
console.log("a =", a)
a++;
console.log("a =", a)


// //assignment operators
let i = 2;
let j = 4;
i += 1;
console.log("i =", i);


//comparision operators
// // equal to 
let e = 2;
let f = 3;
console.log("2 == 3", e == f)
console.log(" 2 != 3", e != f)
// equal to and type
let g = 2;
let h = "3";
console.log("2 === 3", g === h);
console.log("2 !== 3", g !== h)


//logical operators
let r = 5;
let s = 4;

let cond1 = r > s;
let cond2 = r === s;
console.log(" cond1 && cond2 =", cond1 && cond2)


// conditional statement
// if statement
let t = 16;

if (t > 18) {
    console.log("you can vote");
}
if (t < 18) {
    console.log("you cannot vote");
}

// if-else statement

let num1 = 20;
if (num1 % 2 === 0) {
    console.log(num1, "is odd");
} else {
    console.log(num1, "is even");
}


//ternary operators
let age = 21;
let result = age >= 18 ? "adult" : " not adult";
console.log(result);

let num = prompt("enter a number:");

if (num % 5 === 0) {
    console.log(num, "is multiple of 5")
} else {
    console.log(num, " is not multiple of 5")
}