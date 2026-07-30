/*==================================================
THE AYNOOR LIBRARY
LIBRARY.JS
Version 1.0
==================================================*/


/*=========================================
DOM READY
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

initLibrary();

});


/*=========================================
LIBRARY INITIALIZE
=========================================*/

function initLibrary(){

console.log(

"%cTHE AYNOOR LIBRARY",

"color:#A67C52;font-size:18px;font-family:serif;"

);

console.log(

"Institutional Library Ready."

);

}


/*=========================================
ENTER THE LIBRARY
=========================================*/

const libraryButton=

document.querySelector(".library-button");

if(libraryButton){

libraryButton.addEventListener("click",()=>{

playPaperSound();

});

}


/*=========================================
KEYBOARD SUPPORT
=========================================*/

document.addEventListener(

"keydown",

(event)=>{

if(event.key==="Enter"){

const button=

document.querySelector(".library-button");

if(

document.activeElement===button

){

button.click();

}

}

);


/*=========================================
END
=========================================*/

console.log(

"Library Interaction Loaded."

);
