"use strict"
let arr = ['ginegologist', 'surgeon', 'sonographer']
 let data_ = { "ginegologist":["consultation","manipulation","smear","cauterization"],
   "surgeon": ["consultation","dissection of abscess","gypsum"],
    "sonographer":["abdomen", "pelvis minor","echocardiography","doppler"]};
for (let ar of arr) {	
console.log(data_[ar])};
 
let base = document.getElementById("base");
for (let elem of arr) {
let head = document.createElement("h1");
head.classList.add("order");
head.innerHTML = elem;
base.appendChild(head);	
let parent = document.createElement("ul");
parent.classList.add("order");
base.appendChild(parent);
 for(let el of data_[elem]) {
	 let row = document.createElement("li");
	 let refer = document.createElement("a");
	 console.log(refer)
	   
       row.innerHTML = el;
       parent.appendChild(row);
	   row.appendChild(refer);}
	   } 
	   
$("a").attr("href", "http://www.google.com/");
