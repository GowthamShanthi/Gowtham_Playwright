//Namachivaya

const flag = true;

if(flag==true){

    console.log('This is printing if part ');
}else

    console.log('This is printing else part');


//While loop

let i=1;

while(i<=10)
{

    console.log('This is printing while loop',i,'th time'); 
    i++;
        

}


//For loop

for(let i=1;i<=10;i++){

    console.log('Tis is from for  loop',i)
}



let j=5;
do{

    console.log('This is do while');
    j++;
}

while(j<5);


//for loop to  find divisible by 2 and 5 


let count =0;
for(let m=0;m<100;m++){


if (m%2 == 0 && m%5==0 )
{

    console.log('this is m value',m);
    count ++;
}
if (count ==5)
{
    break;
}
}