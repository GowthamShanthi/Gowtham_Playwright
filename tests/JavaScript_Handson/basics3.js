//Namachivaya

let marks = [100,200,300,400,500,600]
console.log('This is the index position of the value 200 ',marks.indexOf(200));
//print the element from one position to another 
console.log(marks.slice(2,5))






//Print all the lementsin the array 

for(let i=0;i<marks.length;i++){

    console.log('The current element in the array',marks[i])
}






//Prints the elemen in 3rd position 
console.log(marks[2])


marks[2] = 900;

console.log('The new array is',marks)

// Prints th length of the array 
console.log('The length of array is ',marks.length)


//Add elements to array in the last position 
marks.push(700,800)

console.log('The new array is',marks)

//Remove last element from the array 
marks.pop();

 console.log('The new array is',marks)

//Insert element at the startof the array 
marks.unshift(50);
console.log('The new array is',marks)







// Check whether a values i present inthe array

console.log('The value present or not ?', marks.includes(950));



// Check te divisbbl eby 2 using filter() method 



var scores = [2,3,4,5,6,8,10];
var result =[];


for(let i=0;i< scores.length;i++){

if(scores[i]%2 ==0)
{

    
result.push(scores[i]);
}
}




result = scores.filter(score => score %2==0);

console.log('The result values are ',result);


//map
var maparray = [3,5,7,9];

let multipiedarray = maparray.map(item=> item*3);



//Addition using accumlator

var addarray = [20,40,60,80];

let finalsum = addarray.reduce((count, eachadd) => count + eachadd, 0);
 

console.log('The final sum using accumlatore',finalsum)




// Fiding divisible by 2 

var divarray = [90,12,30,50,20,33];
 
let finaldiv = divarray.filter(divval=> divval%2 ==0);

console.log('This is the final div',finaldiv);

 

 //Multiple all the values and store it in new array 

 var firstarray = [3,5,8,9,12];
 let multipliedarray = firstarray.map(eacharray => eacharray*3);
 console.log('This is the multiplied array',multipliedarray);

 //Sum all thevalues in the new array 

 let summedval = multipiedarray.reduce((sum,eachval)=> sum+eachval,0)
 console.log('The summedvalue fo new array is',summedval);


//Sum of all the  numbers 

 const nums = [5, 10, 15, 20];

const result2 = nums.reduce((sums,eachnum)=>sums+eachnum,0);

console.log('EXERCISE>>>>>The sum of all number',result2);


//Find largest number in array
const nums2 = [3, 9, 2, 7, 5];

const largest = nums2.reduce((larges, eachnum2) => larges > eachnum2 ? larges : eachnum2, 0);

console.log('The largest number is', largest);


//chaining of reduce,map,filter 

var array3 = [20,30,45,50,60];


let finalarr= array3.map(eacharr => eacharr*3).filter(eacharr => eacharr%2==0).reduce((sum,eacharr)=>sum+eacharr);
console.log('The final array is ',finalarr);



//String Array sort

var fruits =['orange','banana','apple','pomergranate'];

console.log(fruits.sort());


//Number array sort 

var num = [003,41,21,11,243];

//This is wrong 
console.log(num.sort());


//This is correct 
console.log(num.sort((a,b)=> a-b));


//Reverse the string array 

console.log(fruits.reverse());





 
//Namachivaya

var expenses = [100,200,300,400,500]




function findLargest(arr) {
  return arr.reduce((biggest, n) => Math.max(biggest, n), arr[0]);
}

console.log('This is teh largest in array ',findLargest(expenses)); // 9
   