//select by id
/*
let heading= document.getElementById("heading");
   console.dir(heading); //cause it is an object 
   //select by classname
   let headings = document.getElementsByClassName("heading-class");
   console.dir(headings);
   //queryselector
   let elements = document.querySelector("p"); //1st element
   let allElement =document.querySelectorAll("p");//all element


   let div= document.querySelector("div");
   console.dir(div);
div.innerText//inner shob text dekhabe
div.innerHTML//shb dekhabe html shho
div.textContent//hidden shoho shb text dekhay

//access h2 addd some text 
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText= h2.innerText + "after adding this text"

let divs= document.querySelectorAll(".box");
let idx=1;
for(i of divs)
{
i.innerText= `new value ${idx}`;
   idx++
}

//style selector
let btn= document.createElement("button");
btn.innerText = "Click me";
btn.style.color= "white";
btn.style.backgroundColor = "red";

let div = document.querySelectorAll(".box");
div[0].append(btn);
//shobgula div e btn same chaile btn clone kore add korte hobe new var use kore 
//event
btn.onclick=() =>{
   div[0].style.backgroundColor="black";
};
let para = document.querySelector("p");
para.classList.add("newClass");

//event listener
//node.EventListener(event, callback)
btn.addEventListener("dblclick",() => {
   div[0].style.backgroundColor="white";
})

*/
//toggle
let mode= document.querySelector("button");
let currMode="light";
let body= document.querySelector("body");
mode.addEventListener("click", () => {
if(currMode=="light")
{
   currMode="dark";
   body.classList.remove("light");
   body.classList.add("dark");

}
else{
   currMode="light";
   body.classList.remove("dark");
   body.classList.add("light");
}
});