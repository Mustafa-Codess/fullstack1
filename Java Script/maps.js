var course = ['html', 'css', 'js']

console.log("In Lowercase ",course);

var newcourse = course.map((e) => e.toUpperCase());


console.log("Converted In Uppercase ",newcourse);

var arr = [2,3,4,5,6,7]

var arr1 = arr.map((e)=>e*e)

console.log("Sqaure of Numbers ",arr1)


var arr2 = [
    {
        product:'bucket',
        Price:100
    },
    {
        product:'belt',
        Price:300
    },
    {
        product:'T-Shirt',
        Price:200
    },
    {
        product:'Shoes',
        Price:700
    },
    {
        product:'Jeans',
        Price:1000
    }
]

var arr3 = arr2.map((e)=>e.product)

console.log("Products ",arr3)


var arr4 = [95.5,96,98.6,99.5,101.10]
console.log("Tempretures in Celcius ",arr4)

var arr5 = arr4.map((f)=>(f * 9/5) + 32)

console.log("Tempretures in Fahrenheit ",arr5)

var arr6 = [
    {
        names:'irfan',
        age:'20'
    },
    {
        names:'mustafa',
        age:'22'
    },
    {
        names:'fasi',
        age:'24'
    },
    {
        names:'noman',
        age:'28'
    }
]

console.log(arr6)

var arr7 = arr6.map((a)=>{
    return {
        names:a.names,
        age:2023-a.age
    }
})

console.log("Fetched year of birth by age ",arr7);