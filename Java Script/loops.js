
//FIRST  even number
for(var i=0; i<=100; i++)
{
    if(i%2==0)
    {
     console.log(i)
     }
    
}

//SECOND odd number



for(var i=0; i<=100; i++)
{
    if(i%2!=0)
    {
      console.log(i)
     }
    
}

//THIRD sum of all numbers

var sum=0;
for(var i=0; i<=50; i++)
{
    sum = sum + i;
    
}

console.log("sum of numbers",sum);


//FOURTH SUM OF EVEN AND ODD NUMBERS


var sumev=0;
var sumod=0;
for(var i=0; i<=50; i++)
{
    if(i%2==0)
    {
        sumev = sumev + i;
    }
    else if(i%2!=0)
    {
        sumod = sumod + i;
    }
    
}

console.log("even",sumev);
console.log("odd",sumod);


//FIVTH SUM OF EVEN AND ODD NUMBERS IN ARRAY
let op = [sumev,sumod];

console.log(op);

//SIXTH CREATING COUNTRY NAMES ARRAY



var arr=["ALBANIA"
,
"BOLIVIA"
,
"CANADA"
,
"DENMARK"
,
"ETHIOPIA"
,
"FINLAND"
,
"GERMANY"
,
"HUNGARY"
,
"IRELAND"
,
"JAPAN"
,
"KENYA"]

console.log(arr)

 
var arr1 = arr.map(function(len){
    return len.length;
})
 
 console.log(arr1)
 
 /*console.log(arr.map(function(len){
     return len.length;
 }))*/



var lgth = 0; 
var longest; 
   for (var i = 0; i < arr.length; i++) 
   { 
         if (arr[i].length > lgth) 
        { 
          var lgth = arr[i].length; 
          longest =  arr[i];
        }
    } 
         console.log(longest);


var temp=[];
   for(var i=0; i<arr.length; i++)
   {
       if(arr[i].length==5)
       {
           console.log(arr[i])
       }
       
   }
   
   
   
 var newarr=[];
 
 while(arr.length)
 {
     newarr.push(arr.pop());     
 }

     console.log(newarr);

    