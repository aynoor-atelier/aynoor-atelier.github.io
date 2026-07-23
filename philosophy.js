/*==================================================
AYNOOR ATELIER
PHILOSOPHY.JS
CHAPTER I
==================================================*/


document.addEventListener("DOMContentLoaded",()=>{

/*=========================================
PAGE TITLE
=========================================*/

document.title="Our Philosophy | Aynoor Atelier";


/*=========================================
ACTIVE CHAPTER
=========================================*/

document.body.setAttribute(

"data-chapter",

"philosophy"

);


/*=========================================
INITIAL REVEAL
=========================================*/

const hero=document.querySelector(".hero");

if(hero){

hero.classList.add("show");

}


/*=========================================
INTRO REVEAL
=========================================*/

const intro=document.querySelector(".intro");

if(intro){

intro.classList.add("show");

}


/*=========================================
CHAPTER READY
=========================================*/

console.log(

"%cChapter I Loaded",

"color:#A67C52;font-size:15px;font-family:Cinzel,serif;"

);

});
