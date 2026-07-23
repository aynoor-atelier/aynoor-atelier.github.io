/*==================================================
AYNOOR ATELIER
LETTER.JS
VOLUME VII
==================================================*/


document.addEventListener("DOMContentLoaded",()=>{


/* PAGE TITLE */

document.title =
"The Custodian's Letter | Aynoor Atelier";



/* ACTIVE CHAPTER */

document.body.dataset.chapter =
"letter";



/* HERO */

const hero =
document.querySelector(".hero");


if(hero){

hero.classList.add("show");

}



/* LETTER */

const letter =
document.querySelector(".letter-content");


if(letter){

letter.classList.add("show");

}



/* CLOSING */

const closing =
document.querySelector(".closing-letter");


if(closing){

closing.classList.add("show");

}



/* READY MESSAGE */

console.log(

"%cVolume VII Loaded — Manuscript Complete",

"color:#A67C52;font-size:15px;font-family:Cinzel,serif;"

);


});
