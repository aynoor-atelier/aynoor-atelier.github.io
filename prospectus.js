/*==================================================
AYNOOR ATELIER
PROSPECTUS.JS
VOLUME VI
==================================================*/


document.addEventListener("DOMContentLoaded",()=>{


/* PAGE TITLE */

document.title =
"Collector Prospectus | Aynoor Atelier";



/* ACTIVE CHAPTER */

document.body.dataset.chapter =
"prospectus";



/* HERO REVEAL */

const hero =
document.querySelector(".hero");


if(hero){

hero.classList.add("show");

}



/* INTRO REVEAL */

const intro =
document.querySelector(".intro");


if(intro){

intro.classList.add("show");

}



/* READY */

console.log(

"%cVolume VI Loaded",

"color:#A67C52;font-size:15px;font-family:Cinzel,serif;"

);


});
