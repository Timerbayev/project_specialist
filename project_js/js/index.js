"use strict"
 let arr = ['ginegologist', 'surgeon', 'sonographer', 'pediatrician', 'internist', 'dental professional', '
 let base = document.getElementById("base");  
 let parent = document.createElement("ul");
 base.appendChild(parent);
 for(let i = 0; i <= 10; i++) {
	 let row = document.createElement("li");
       row.innerHTML = i;
	   parent.appendChild(row);}