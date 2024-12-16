//Write a program that takes a string as input and counts the number of words in it.
//Apple -> 5
const fruit = "Apple"
console.log(fruit.length)

//Write a program that takes a string as input and converts it to uppercase.
//apple -> APPLE
console.log(fruit.toUpperCase());

//Write a program that takes a string as input and removes all the vowels from it.
//Apple -> ppl
console.log(fruit.slice(1, 4));

//Write a program that checks if a given string is a palindrome.
//Level is palindrome
const input = "Palindrome"
if (input) {
    console.log("Level is palindrome");
} else {
    console.log("Level is not palindrome");
}

//Write a program that takes a string as input and reverses it.
//Apple -> elppA
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Apple"));


//number manupulation
//Write a program that takes a number as input and checks if it is a prime number.
//3 -> 3 is a prime number
const num = 3;

if (num) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}



// Write a program that takes an array of numbers as input and returns the sum of all the numbers.
// [1,2,3] -> 6
let array = [1, 2, 3];
let sum = 0;
let foreach = array.forEach(function (value) {
    sum = sum + value;
});
console.log(sum);

// // Write a program that takes a number as input and calculates its factorial.
// // 4 -> 4*3*2*1 -> 24

function calculator(num1, num2, num3, num4, operations = "mul") {
    if (operations === "mul") {
        return num1 * num2 * num3 * num4;
    }
}
const resultMul = calculator(4, 3, 2, 1);
console.log(resultMul);


//Write a program that takes a number as input and checks if it is a perfect square.
//4 -> 4 is a perfect square $ is used to embed the elemet

function isPerfectSquare(num) {
    if (num < 0) return false;
    const sqrt = Math.sqrt(num);
    return sqrt === Math.floor(sqrt);
}
const inputNumber = 7;
if (isPerfectSquare(inputNumber)) {
    console.log(`${inputNumber} is a perfect square.`);
} else {
    console.log(`${inputNumber} is not a perfect square.`);
}

//Write a program that takes a number as input and checks if it is a Fibonacci number.
//0,1,1,2,3,5,8….


// // Array Manipulation:

// // Write a program that takes two arrays as input and merges them into a single array.
// // [1,2,3] [4,5,6] -> [1,2,3,4,5,6]

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

const num3 = num1.concat(num2);
console.log(num3)


//Write a program that takes an array of numbers as input and returns the largest number.
//[4,2,6,8] -> 8

function findLargestNumber(numbers) {
    return numbers.length ? Math.max(...numbers) : null;
}
let numbers = [4, 2, 6, 8];
console.log(findLargestNumber(numbers));

//Write a program that takes an array of strings as input and sorts them alphabetically.
//[d,e,f,a] -> [a,d,e,f]

function sortStringsAlphabetically(arr) {
    return arr.sort((a, b) => a.localeCompare(b));
}
const strings = ['d', 'e', 'f', 'a'];
const sortedStrings = sortStringsAlphabetically(strings);
console.log("Sorted array:", sortedStrings);


//Write a program that takes an array of numbers as input and removes all duplicates.
//[a,a,b,d,e,e,f] -> [a.b.d.e.f]


//Write a program that takes an array of numbers as input and returns a new array with only the even numbers.
//[1,2,3,4,5,6,7,8,9] -> [2,4,6,8]



//Write a program that creates an object representing a person with properties like name, age, and gender.

const person = {
    name: "sagar",
    age: 21,
    gender: "male",
};
console.log(person["name"])

//Write a program that takes two objects as input and merges their properties into a single object.
//{name: sudarshan, address: gairidhara} {phone: 1234567890} -> {name: sudarshan, address: gairidhara} phone: 1234567890}

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const obj1 = { name: 'sudarshan', address: 'gairidhara' };
const obj2 = { phone: 1234567890 };
const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject);


//Write a program that takes an array of objects representing students and returns an array of their names.
//[{name: sudarshan}, {name: nikesh}] -> [sudarshan, nikesh]

function studentName(students) {
    return students.map(student => student.name);
}
const students = [{ name: 'sudarshan' }, { name: 'nikesh' }];
const studentNames = studentName(students);
console.log(studentNames);


//Write a program that takes an object representing a student with properties like name and grades, and calculates their average grade.
//[{name: Sudarshan, marks: 40}, {name: suraj, marks: 100}, {name: simran, marks: 100}]	-> Average is 80

const college = [
    { name: 'Sudarshan', marks: 40 },
    { name: 'Suraj', marks: 100 },
    { name: 'Simran', marks: 100 }
];
function calculateAverageGrade(college) {
    const totalMarks = college.reduce((sum, student) => sum + student.marks, 0);
    const average = totalMarks / college.length;
    return average;
}
const averageGrade = calculateAverageGrade(college);
console.log(`Average is ${averageGrade}`);


//Write a program that takes an array of objects representing books with properties like title and author, and sorts them alphabetically by title.

const books = [
    { title: 'palpasa cafe', author: 'narayan wagle' },
    { title: 'seto dharti', author: 'amar neupane' },
    { title: 'karnali blues', author: 'buddhi sagar' },
    { title: 'ramayan', author: 'bhanu bhakta acharya' }
];
function sortBooksByTitle(books) {
    return books.slice().sort((a, b) => {
        return a.title.localeCompare(b.title);
    });
}
let sortedBooks = sortBooksByTitle(books);
console.log(sortedBooks);

