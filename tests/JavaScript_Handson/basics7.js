//Namachivaya

//Classes

//Two ways we candefine properties in class


class Person {

//CLass properties 

//One way directly
age = 25;

firstname = 'ayyavaalga';
 
 

 
// Constructor in class 

    constructor(firstname, lastname)
    
    { 

this.firstname = firstname;
this.lastname =  lastname;


    }

    //Methods in class 

    fullname(){

        console.log('The full  name from function is ' ,this.firstname + this.lastname);
    }
 


//second way using getters 

get location(){

    return "canada";
}





}

module.exports = Person;





//  let per =  new Person();


//  let per2 = new Person('amma','valga');
//  console.log ("The value of age in the class is ",per.age);
// // console.log ("The value of location in the class is ",per.location);
//  console.log ("The value of firstname in the class is ",per2.firstname);
// // console.log ("The value of lastname in the class is ",per.lastname);

// let per1 = new Person('Namachivaya','Vaalga');

// console.log ("The value of firstname from the constructor is  ",per1.firstname);
// console.log ("The value of lastname from the constructor is ",per1.lastname);
// console.log ("The value of lastname from the function is  is ",per1.fullname());









//Constructor is  meethod which executes by default when you create an object of the class




  




