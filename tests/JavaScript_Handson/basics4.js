//Namachivaya

//*************************Functions**********************/

//Function type1


var    greet ="Evening";
console.log('This is value of greet global keyword',greet)

function add(a,b){

    return a+b;

}

console.log('The classic sum value is',add(5,10));

console.log(add(2,3));


//Function type2 - anonymous function 

let sumofnumbers=    function(a,b){

    return a+b;
};

console.log('The sum of two numbers is',sumofnumbers(5,8))


//Function type3 - anonymous function 

var sumofIntegers = (a,b)=>{

    return a+b;
};

console.log('The sum of two integer is',sumofIntegers(5,5));



//FUntion  type 4 - anonymous function

var sumofvalues = (a,b)=> a+b
console.log('This is values',sumofvalues(25,25));


function adding(c,d,e)
{

    let greet = "Morning";

    console.log('The value of greet inside function',greet);

    return(c+d+e);



}


console.log(adding(1,2,3));

if(1==1){

    var   greet = 'afternoon';

    console.log('The greet value now inside block   is',greet);
}


console.log('The greet value now globally    is',greet);