//Namachivaya

const Person = require('./basics7');

class Pet extends Person{

 



    get location(){

        return "bluecross";

        }


        constructor (firstname,lastname){
 

            super(firstname,lastname);
         

            


        }

      



}

let pet = new Pet();

let pet1 = new Pet ("Vaalga","perumaanae");

console.log("The property form parent",pet.age);

console.log("The overrided locaion now is",pet.location);

console.log('The full name is ',pet1.fullname())






