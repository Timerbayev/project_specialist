let data = [
{
	"kind": "surgeon",
	"first_name": "Andrey",
	"second_name": "Kusuklovsky",
	"age": "56",
	"experience": "30",
    "degree":"Highly qualified"},
 {
	"kind": "surgeon",
	"first_name": "Andrey",
	"second_name": "Konstantinovich",
	"age": "33",
	"experience": "10",
    "degree":"Middle qualified"},
	{
	"kind": "ginegologist",
	"first_name": "Svetlana",
	"second_name": "Kostina",
	"age": "43",
	"experience": "20",
    "degree":"Highly qualified"},
	{
	"kind": "ginegologist",
	"first_name": "Evgeny",
	"second_name": "Pashin",
	"age": "48",
	"experience": "25",
    "degree":"Highly qualified"}
	]

let parent = document.querySelector(".container");
let arr = ["first_name", "second_name","age","experience","degree"];

for (let ar of data){
	
	head = document.createElement("h1");
	head.innerHTML = ar["kind"];
	parent.appendChild(head);
	row = document.createElement("ul");
	parent.appendChild(row);
	for (let a of arr){
		line = document.createElement("li");
	    line.innerHTML = ar[a];
	    row.appendChild(line);}
	
	
}

	   
$(document).ready(function(){$("h1").click(function(){
  $("ul").slideToggle("slow");
  });
  });  
	   
	   
	   