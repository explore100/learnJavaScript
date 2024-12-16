//for loop
for (let i = 1; i < 5; i++) {
    console.log("apna clz");
}

let num = 3;
for (let i = 1; i < 4; i++) {
    sum = num + i;
}
console.log("sum =", sum);


// //while loop
let a = 7;
while (a <= 10) {
    console.log("kingswy");
    a++;
}

//do-while loop
let i = 2;
do {
    console.log("i =", i);
    i++;
} while (i <= 6)

//for-of loop
let str = "java script";
let size = 0;
for (let i of str) {
    console.log("i =", i);
    size++
}
console.log("size =", size);

//make 0 to 100 even number using loop
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log("num =", num);
    }
}

// //guess the correct numeber asking guest
let gameNo = 10;
let guestNo = prompt("enter a no to win a game :")
while (guestNo != gameNo) {
    guestNo = prompt(" you have enter a wrong no. try again :")
}
console.log("congartulation u have enter right no")

//string in java script
let string = "kingseay";
console.log(string[1]);

//template literals in js
let obj = {
    item: "pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//string methods in js
//  string about upper case
let stra = "kingsway";
let newStr = stra.toUpperCase();
console.log(newStr);

//slice
let sli = "kings";
console.log(sli.slice(1, 3))

//concat
let str1 = "kings";
let str2 = "way";
let res = str1.concat(str2);
console.log(res)

//replace
let str3 = "hello";
console.log(str3.replace("h", "y"));

// // char at
let str4 = "hello";
console.log(str4.charAt(1))

//practise qn
let fullName = prompt("write a full name without space");
let userName = "@" + fullName + fullName.length
console.log(userName)