//Namachivaya

//Javascript Objects

let person = {

    firstname:'Gowtham',
    lastname :'Velumani',

    age : 24,

    // adding function as the property fo robject 

    fullname : function(){

           return  this.firstname + ' ' + this.lastname;

          


    }


};

//Accessing object through dot notation
console.log('The first name is',person.firstname);

person.firstname = 'namachivaya';

 //Accesing function property in object 

 console.log('The function is',person.fullname());

 

console.log('The new object is',person);

//Accesing obhect through array type notation
console.log('The last name is',person['lastname']);

//Accesing  the number in object

console.log('The person age is',person['age']);


//Adding another property to object 

person.gender = 'male';
console.log('The gender is',person.gender);

console.log('The new object is',person);

console.log('gender' in person);

 
console.log('Is the gender exist now?','gender' in person);

delete person.gender;

console.log('The updated object is',person);

;
console.log('Is the gender exist now?','gender' in person);

for(let key in person)

{

    console.log(person[key]);
}