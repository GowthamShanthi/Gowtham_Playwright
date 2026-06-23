//Namachivaya

//*************************Functions**********************/

//Function type1

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
