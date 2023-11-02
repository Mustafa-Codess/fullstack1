var arr = [1,2,3,4,5,6,7,8,11,44,22,77,66]
console.log(arr)

var arr1 = arr.filter((e)=>{
    return e%2==0;
})

console.log("Array of even numbers ",arr1);

var country = ['India', 'Japan', 'Palestine','China','North Amarica','Ethopia','England','Finland','Germany']
console.log(country)

var country1 = country.filter((e)=>{
    return e.length<6;
})

console.log("Country names having less than 6 characters ",country1);

var arr2 = country.filter((e)=>{
    return e.match('E');
})
console.log("Country names which starts from E ",arr2);


var arr3 = [
    {
        product: 'bucket',
        Price: 9
    },
    {
        product: 'belt',
        Price: 5
    },
    {
        product: 'T-Shirt',
        Price: 30
    },
    {
        product: 'Shoes',
        Price: 20
    },
    {
        product: 'Jeans',
        Price: 10
    }
]

var arr4 = arr3.filter((e) => e.Price<10)

console.log(arr4);



var arr5 = [
    {
        employees: 'Fasi',
        salary: 50000
    },
    {
       employees: 'Noman',
       salary: 45000
    },
    {
        product: 'Irfan',
        salary: 38000
    },
    {
        product: 'Istiyath',
        salary: 67000
    },
    {
        product: 'Jaffar',
        salary: 55000
    }
]

var arr6 = arr5.filter((e)=>e.salary>=50000)
console.log(arr6);