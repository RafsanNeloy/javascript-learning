//declare function function name
/*
function myFunction() {
 console.log("first function");
}
//function call/invoke
myFunction();

//here u v local variables of function
function F(u,v) {
s= u + v;
return s;
}
let val=F(5,9);
console.log(val);


//arrow functionfor small code -- const functionName= (param1,param2,...) => {}
 const f= (u,v) => {
    s= u+v;
    console.log (s);
 };
 f(10,14);
 
//practice using for of loop 
function countVowels(str){
 let count  = 0;
 for( const char of str){
    if(char=="a"|| char=="e"|| char=="i"||char=="o"|| char=="u")
        {  count++;
        }
 }
 return count;
 console.log("total num of vowel: " ,count);
}


countVowels(prompt("enter word"));

//using arrow func and normal for loop 
const cVowels= (str) =>{
let count =0;
for(let i=0;i<=str.length;i++){
let char= str[i];
if(char=="a"|| char=="e"||char=="i"||char=="o"||char=="u")
{
    count++;
}
}
console.log("number of vowels",count);
}
cVowels(prompt("enter word"));


//forEach only use for array where function of function can be used 

let arr = [2,3,5,6];
arr.forEach((val,idx,arr) =>{
    console.log(val,idx,val*val);
});

//map and forEach are same but create  a new array 
//filter is also same which returns true value
//reduce gives 1 value reduces 
//practice
let arr2=[1,2,3,6,7,8,101,90,88,91,92];
let largeNumber = arr2.reduce((prev,curr) => //large number
{
    return prev>curr? prev : curr;
});
let topper= arr2.filter((val) => { //number 90+
    return val>90;
});
console.log(topper);
console.log(largeNumber);

//input n that gives n number array & calculate sum 
let n= prompt("enter number" );
let arr=[];
for(let i=1; i<=n;i++)
{
  arr[i-1]=i;
}
let sum = arr.reduce( (prev,curr)=>
{
    return prev+curr;
});
console.log(sum);
console.log(arr);
*/