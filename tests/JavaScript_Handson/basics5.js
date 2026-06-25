//Namachivaya 

//String operations 


  const Person = require('./basics7')


  const per2 = new Person();

  console.log('The value from basic7.js is ',per2.age)
  



let day = 'tuesdasy '

//Length of the string 
console.log('This is the length of the string',day.length);


//Getthe substring
console.log('The substring is ',day.slice(0,5));

//Retrive a vlue from the string 
console.log('The fourth word in the string is',day[3]);


//Split the string based on a character 

console.log('The split string using s is',day.split('s'));

console.log('After splitted the first part is',day.split('s')[0]);

//Trim the white spaced
let s2 = 'namachivaya vaalga saamy     ';

console.log('The string length before trim is',s2.length);

console.log('The trimemd string is ', s2.trim());

let s3 = s2.trim();

console.log('The string length after trim is',s3.length);

//Trim() - will tri te leading and trialing whitespaced in the whole string 


let date = '23';

let next = '27';

//converting string to number value - [parseint()]

console.log('The difference between two date is',parseInt(date-next));


//When we need to convert a number to a string - then tostring()

let s4= "Namachivaya"
let s5 = "Vaalga"

console.log('The concatinated value of two string is',s4.concat(s5));


console.log('The conatinated string using + is',s4+s5);


let newquote = s4+"ayya vaalga";
let val = newquote.indexOf("a");

console.log(val);


// find the occurance of word  in 
let counter = 0;

while (val!=-1){

    counter++;

    val = newquote.indexOf("a",val+1);
     
}


console.log("The number of times the a in the string is ",counter)



