/*==================================================
AYNOOR ATELIER
MANUSCRIPT.JS
==================================================*/


/*==============================
ELEMENTS
==============================*/

const chapters =
document.querySelectorAll(".chapter");


/*==============================
PAGE LOAD
==============================*/

window.addEventListener(

"load",

()=>{

document.body.classList.add("loaded");

revealChapters();

}

);


/*==============================
STAGGER REVEAL
==============================*/

function revealChapters(){

chapters.forEach(

(chapter,index)=>{

chapter.style.opacity="0";

chapter.style.transform=

"translateY(30px)";


setTimeout(()=>{

chapter.style.transition=

"all .8s ease";

chapter.style.opacity="1";

chapter.style.transform=

"translateY(0)";

},index*150);

});

}


/*==============================
HOVER SOUND READY
==============================*/

chapters.forEach(

chapter=>{

chapter.addEventListener(

"mouseenter",

()=>{

chapter.style.boxShadow=

"0 0 35px rgba(166,124,82,.18)";

});


chapter.addEventListener(

"mouseleave",

()=>{

chapter.style.boxShadow="";

});

});


/*==============================
CLICK EFFECT
==============================*/

chapters.forEach(

chapter=>{

chapter.addEventListener(

"click",

(event)=>{

event.preventDefault();

const url=

chapter.getAttribute("href");


chapter.style.transform=

"scale(.98)";

chapter.style.opacity=".75";


setTimeout(()=>{

window.location.href=url;

},350);

});

});


/*==============================
KEYBOARD SUPPORT
==============================*/

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


/*==============================
CONSOLE
==============================*/

console.log(

"%cTHE MANUSCRIPT",

"color:#A67C52;font-size:18px;font-family:serif;"

);

console.log(

"Volume I Loaded."

);

/*==================================================
FINAL TOUCH
==================================================*/

document.querySelectorAll(".chapter").forEach((chapter)=>{

chapter.addEventListener("focus",()=>{

chapter.scrollIntoView({

behavior:"smooth",

block:"center"

});

});

});


console.log(

"%cAYNOOR ATELIER",

"color:#A67C52;font-size:20px;font-weight:bold;"

);

console.log(

"Digital Manuscript Ready."
);
