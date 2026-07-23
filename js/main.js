/*=========================================
AYNOOR ATELIER
VERSION V
MAIN.JS
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

const cover=document.getElementById("cover");

const seal=document.getElementById("seal");

let opened=false;


/* Open Book */

function openBook(){

if(opened) return;

opened=true;

cover.classList.add("open");


/* Soft Page Sound */

const sound=new Audio("assets/audio/page-flip.mp3");

sound.volume=.15;

sound.play().catch(()=>{});

}


/* Seal Click */

seal.addEventListener("click",openBook);


/* Keyboard */

document.addEventListener("keydown",(e)=>{

if(e.code==="Space"||e.key==="Enter"){

openBook();

}

});


/* Double Click Cover */

cover.addEventListener("dblclick",openBook);




/* Mouse Light */

document.addEventListener("mousemove",(e)=>{

const light=document.querySelector(".ambient-light");

const x=e.clientX/window.innerWidth*100;

const y=e.clientY/window.innerHeight*100;

light.style.background=

`radial-gradient(circle at ${x}% ${y}%,
rgba(201,162,77,.12),
transparent 45%)`;

});


console.log(

"%cAynoor Atelier Version V",

"color:#C9A24D;font-size:18px;font-family:Cinzel;"

);

});
