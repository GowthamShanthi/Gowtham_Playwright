//Namachivaya

let marks = [100,200,300,400,500,600]
console.log('This is the index position of the value 200 ',marks.indexOf(200));
//print the element from one position to another 
console.log(marks.slice(2,5))



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





//print the lements in the array

