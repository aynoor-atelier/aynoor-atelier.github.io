/*==================================================
AYNOOR ATELIER
COMMON.JS
Design System
Version 1.0
==================================================*/


/*=========================================
DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

initAccordion();

initReveal();

initKeyboard();

});


/*=========================================
SOFT MANUSCRIPT SOUND
=========================================*/

const manuscriptSound = new Audio(

"assets/audio/manuscript-open.mp3"

);

manuscriptSound.volume = 0.06;


/*=========================================
PLAY SOUND
=========================================*/

function playPaperSound(){

manuscriptSound.currentTime = 0;

manuscriptSound.play().catch(()=>{});

}


/*=========================================
ACCORDION ENGINE
=========================================*/

function initAccordion(){

const accordions =

document.querySelectorAll(".accordion");

accordions.forEach((accordion)=>{

const header =

accordion.querySelector(".accordion-header");

header.addEventListener("click",()=>{

accordion.classList.toggle("active");

playPaperSound();

});

});

}


/*=========================================
FADE REVEAL
=========================================*/

function initReveal(){

const items =

document.querySelectorAll(".fade-up");

const observer =

new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

items.forEach((item)=>{

observer.observe(item);

});

}


/*=========================================
KEYBOARD SUPPORT
=========================================*/

function initKeyboard(){

document.addEventListener(

"keydown",

(event)=>{

if(event.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

}


/*=========================================
CONSOLE
=========================================*/

console.log(

"%cAYNOOR ATELIER",

"color:#A67C52;font-size:18px;font-family:serif;"

);

console.log(

"Common Design System Loaded."

);

/*==================================================
BUILD 2
ADVANCED INTERACTION
==================================================*/


/*=========================================
ONLY ONE ACCORDION OPEN
=========================================*/

function closeOtherAccordions(current){

document
.querySelectorAll(".accordion.active")
.forEach((accordion)=>{

if(accordion!==current){

accordion.classList.remove("active");

const icon=
accordion.querySelector(".accordion-icon");

if(icon){

icon.textContent="+";

}

}

});

}


/*=========================================
UPDATE ICON
=========================================*/

function updateAccordionIcon(accordion){

const icon=
accordion.querySelector(".accordion-icon");

if(!icon) return;

if(accordion.classList.contains("active")){

icon.textContent="−";

}

else{

icon.textContent="+";

}

}


/*=========================================
REPLACE ACCORDION ENGINE
=========================================*/

function initAccordion(){

const accordions=

document.querySelectorAll(".accordion");

accordions.forEach((accordion)=>{

const header=

accordion.querySelector(".accordion-header");

updateAccordionIcon(accordion);

header.addEventListener("click",()=>{

const isOpen=

accordion.classList.contains("active");

closeOtherAccordions(accordion);

accordion.classList.toggle("active");

if(isOpen){

accordion.classList.remove("active");

}

playPaperSound();

updateAccordionIcon(accordion);

});

header.addEventListener("keydown",(event)=>{

if(event.key==="Enter" || event.key===" "){

event.preventDefault();

header.click();

}

});

header.setAttribute("tabindex","0");

header.setAttribute("role","button");

});

}


/*=========================================
ARIA SUPPORT
=========================================*/

document
.querySelectorAll(".accordion")
.forEach((accordion)=>{

accordion.addEventListener("click",()=>{

const header=

accordion.querySelector(".accordion-header");

header.setAttribute(

"aria-expanded",

accordion.classList.contains("active")

);

});

});


/*=========================================
PAGE FADE
=========================================*/

window.addEventListener(

"pageshow",

()=>{

document.body.classList.add("page");

}

);


/*=========================================
SMOOTH PAGE TRANSITION
=========================================*/

document
.querySelectorAll("a")
.forEach((link)=>{

const href=

link.getAttribute("href");

if(

!href ||

href.startsWith("#") ||

href.startsWith("mailto:") ||

href.startsWith("tel:")

){

return;

}

link.addEventListener(

"click",

(event)=>{

event.preventDefault();

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href=href;

},250);

});

});


/*=========================================
END
=========================================*/

console.log(

"Interaction System Ready."

);

/*==================================================
BUILD 3
FINAL POLISH
==================================================*/


/*=========================================
ROMAN ACCORDION ICONS
=========================================*/

function updateAccordionIcon(accordion){

const icon=
accordion.querySelector(".accordion-icon");

if(!icon) return;

if(accordion.classList.contains("active")){

icon.textContent="▾";

}

else{

icon.textContent="▸";

}

}


/*=========================================
ESC CLOSE
=========================================*/

document.addEventListener(

"keydown",

(event)=>{

if(event.key!=="Escape") return;

document
.querySelectorAll(".accordion.active")
.forEach((accordion)=>{

accordion.classList.remove("active");

updateAccordionIcon(accordion);

});

});



/*=========================================
ARIA EXPANDED
=========================================*/

document
.querySelectorAll(".accordion")
.forEach((accordion)=>{

const header=

accordion.querySelector(".accordion-header");

header.setAttribute(

"aria-expanded",

"false"

);

header.addEventListener(

"click",

()=>{

header.setAttribute(

"aria-expanded",

accordion.classList.contains("active")

);

});

});


/*=========================================
REDUCED MOTION SUPPORT
=========================================*/

const reduceMotion=

window.matchMedia(

"(prefers-reduced-motion: reduce)"

);

if(reduceMotion.matches){

document.documentElement.style.scrollBehavior="auto";

}


/*=========================================
SAFE SOUND
=========================================*/

document.addEventListener(

"visibilitychange",

()=>{

if(document.hidden){

manuscriptSound.pause();

manuscriptSound.currentTime=0;

}

});


/*=========================================
INTERACTION READY
=========================================*/

window.Aynoor={

version:"1.0",

accordion:initAccordion,

reveal:initReveal,

sound:playPaperSound

};


console.log(

"%cInteraction Engine Locked",

"color:#A67C52;font-size:16px;font-weight:bold;"

);
