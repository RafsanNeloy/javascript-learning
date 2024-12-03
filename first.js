/*
//object create(collection of variables)
//age full name egula key
const student={
    fullName : "Rafsan",
    age :20,
    CGPA : 3.0,
    isPass : true,
};
console.log(student.age);
//2 vabe kora jay
console.log(student["age"]);
//ebave change korte hobe
student["age"]= student["age"]+1;
console.log(student["age"]);
 
let a=5;
let b=3;
let c=a*b;
console.log("a+b= ",c);
//unary
a += 4;
b+= 6;
console.log(b);
//comparison operator
console.log("a==b", a===b);
console.log("a!=b",a!==b);
let cond1 = a > b;
let cond2 = a===6;
console.log("cond1 && cond2", cond1 && cond2);
console.log("!(cond1 && cond2)",!(cond1 && cond2));
//grade code 
// let num= prompt("enter number: ")
// if(0<=num && num <=49 )
// {
//     console.log("F");
// }
// else if ( 50 <= num && num <=59)
// {
//     console.log("D");

// }
// else if(60<=num && num<=69)
// {
//     console.log("C");
// }
// else if(70<= num && num<=89)
// {
//     console.log("B");
// }
// else if (90<= num && num<=100)
// {
//     console.log("A");
// }
// else{
//     console.log("invalid number");
// }

// //loop
// sum=0;
// for(let i=1; i<= 5;i++)
// {
//      sum=sum+1;
// }
 //for of--string
 let str ="Rafsanneloy";
 let i;
 let size=0;
 for( let i of str)
 {
    console.log(i);
    size++;

 }
 console.log(size);

//for in loop--object,array

let student2={
name : "Rafsan",
age: 24,
cgpa :3.06,

};
for (let key in student2)
{
    console.log(key ,student2[key]);
}
//odd
for (let i=0;i<=100;i++)
{
    if(i%2!==0)
    {
        console.log(i);
    }
}

let inum=56;
let num=prompt("enter a number: ");
while (num !=inum)
{
    num=prompt("enter again: ");
}
console.log("success");

//1 line e shb lekha jay 

let student2={
    name : "Rafsan",
    age: 24,
    cgpa :3.06,
};
let output=`my name is ${student2.name} and my age is ${student2.age} \n my cgpa is ${student2.cgpa}`;
console.log(output);
let cap= student2.name.concat("\t neloy");
console.log(cap);


let name= prompt("Enter username :");
let UserNAme= `${"@"}${name}${name.length}`;
console.log(UserNAme);


//array
let array=["rafsanul","islam","neloy"];
let price=[250,645,300,900,50];

let add= price.concat(array);
console.log(add);
let pop= add.pop();
console.log(pop);
add.push(69);
console.log(add);
let str=add.toString();
let cake= add.slice(1,3);
let val=array.splice(1,1,"yoyo"); //(start,kotogula delete, ki add ) 

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");
*/

function myFunction(a,b) {
    let sum =a+b;
    console.log(sum);
     
} 
myFunction(4,3);
let sentence=`this is my paragaraph`;