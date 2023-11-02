// console.log("\ncalculator\n")


// var num1 = 5
// var num2 = 4
 


// // Arithmetic Operator

// console.log(num1+" Value 1")
// console.log(num2+ " Value 2\n")

// // console.log("Arithmetic Operations\n")
// // console.log(num1+num2 + " Addition")      //Addition

// // console.log(num1-num2 +" Subtraction")     //Subtraction

// // console.log(num1*num2 +" Multiplication")  

// // console.log(num1/num2 +" Division")  

// // console.log(num1%num2 +" Modulas")

// console.log(num1**num2)

// console.log(Math.pow(5,4))

var str = "this is irfan, practicing javascript"
console.log(str.length)


var str1 = "hello world"
console.log(str1.toUpperCase())

 var str2 = "HELLO WORLD"
 console.log(str2.toLowerCase())

console.log(str1.slice(6,12))

var arr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(arr.split(","))

var str3 = "javascript"
console.log(str3.indexOf('a'))

console.log(str3.lastIndexOf('a'))

var str4 = "JavaScript is used"
var str5 = " to add functionalities to web app"
console.log(str4.concat(str5))

var str6 = "This course is all about Javascript"
console.log(str6.includes('Javascript'))

console.log(Math.round(Math.random()*100))


var min = 50
var max = 100
console.log(Math.floor(Math.random()*((max-min)+1)+min))

var str7 = " 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 2 7\n 4 1 4 16 64\n 5 1 5 25 125"
console.log(str7)

var str9 = "he earns 50000 from salary per month, 10000 anual bonus"

var sal = parseInt(str9.substring(9,14))
var bonus =parseInt (str9.substring(37,43))
var anualincome = (sal*12)
var totalincome = (anualincome+bonus)

console.log(totalincome)

// console.log(str9.substring(37,43))
