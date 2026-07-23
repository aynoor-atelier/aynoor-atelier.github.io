/*==================================================
AYNOOR ATELIER
MAIN.JS
VERSION VI
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

const book = document.getElementById("book");
const seal = document.querySelector(".seal");
const spotlight = document.querySelector(".spotlight");
const enter = document.getElementById("enterVault");

let opened = false;



/*=========================================
SPOTLIGHT
=========================================*/

function moveLight(x, y){

spotlight.style.background =

`radial-gradient(circle 220px at ${x}px ${y}px,

rgba(255,225,170,.18),

rgba(201,162,77,.08) 35%,

transparent 72%)`;

}



/* Desktop */

document.addEventListener("mousemove",(e)=>{

moveLight(e.clientX,e.clientY);

});



/* Mobile */

document.addEventListener("touchmove",(e)=>{

const t=e.touches[0];

moveLight(t.clientX,t.clientY);

},{passive:true});



/*=========================================
OPEN BOOK
=========================================*/

function openBook(){

if(opened) return;

opened=true;

book.classList.add("open");



/* Page Sound */

const flip = new Audio("page.mp3");

flip.volume = .18;

flip.play().catch(()=>{});

}



/* Seal Click */

seal.addEventListener("click",openBook);



/* Double Click Book */

book.addEventListener("dblclick",openBook);



/* Keyboard */

document.addEventListener("keydown",(e)=>{

if(e.code==="Space" || e.key==="Enter"){

openBook();

}

});



/*=========================================
ENTER
=========================================*/

enter.addEventListener("click",()=>{

document.body.classList.add("fade-out");

setTimeout(()=>{

window.location.href="home.html";

},700);

});



/*=========================================
PERFORMANCE
=========================================*/

window.addEventListener("blur",()=>{

document.body.classList.add("paused");

});



window.addEventListener("focus",()=>{

document.body.classList.remove("paused");

});



console.log(

"%cAYNOOR ATELIER",

"color:#C9A24D;font-size:18px;font-family:Cinzel;"

);

});
