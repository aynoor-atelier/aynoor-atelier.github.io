/*==================================================
AYNOOR ATELIER
FOUNDATIONS.JS
==================================================*/


/*==============================
ELEMENTS
==============================*/

const cards = document.querySelectorAll(".foundation-card");

const header = document.querySelector(".page-header");

const chapter = document.querySelector(".chapter");


/*==============================
PAGE LOAD
==============================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    revealHeader();

    revealCards();

});


/*==============================
HEADER REVEAL
==============================*/

function revealHeader() {

    if (header) {

        header.animate(

            [

                {
                    opacity:0,
                    transform:"translateY(30px)"
                },

                {
                    opacity:1,
                    transform:"translateY(0)"
                }

            ],

            {

                duration:900,
                fill:"forwards",
                easing:"ease"

            }

        );

    }

}


/*==============================
CHAPTER REVEAL
==============================*/

if(chapter){

chapter.animate(

[
{
opacity:0,
transform:"translateY(25px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],

{
duration:900,
delay:250,
fill:"forwards"
}

);

}


/*==============================
FOUNDATION CARDS
==============================*/

function revealCards(){

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition="all .8s ease";

card.style.opacity="1";

card.style.transform="translateY(0)";

},500+(index*170));

});

}


/*==============================
HOVER POLISH
==============================*/

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 25px rgba(166,124,82,.15)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});


/*==============================
KEYBOARD SHORTCUTS
==============================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});


/*==============================
FOOTER NAV
==============================*/

const footerLinks=document.querySelectorAll("footer a");

footerLinks.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const url=link.getAttribute("href");

document.body.style.opacity=".6";

setTimeout(()=>{

window.location.href=url;

},250);

});

});


/*==============================
CONSOLE
==============================*/

console.log(

"%cAYNOOR ATELIER",

"color:#A67C52;font-size:20px;font-family:Cinzel;"

);

console.log(

"Volume II — Six Foundations Loaded."

);
