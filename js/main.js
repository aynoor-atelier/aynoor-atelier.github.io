/*==================================================
AYNOOR ATELIER V4
MAIN.JS
==================================================*/


/*==============================
ELEMENTS
==============================*/

const book = document.getElementById("book");

const cover = document.getElementById("cover");

const page = document.getElementById("page");

const sealButton =
document.getElementById("sealButton");

const enterButton =
document.getElementById("enterButton");


/*==============================
STATE
==============================*/

let opened = false;


/*==============================
INITIAL LOAD
==============================*/

window.addEventListener("load", ()=>{

page.style.opacity="0";

page.style.pointerEvents="none";

});


/*==============================
OPEN MANUSCRIPT
==============================*/

function openBook(){

if(opened) return;

opened=true;


/* Break Seal */

sealButton.style.pointerEvents="none";

sealButton.style.animation=

"sealBreak .8s forwards";


/* Open Cover */

setTimeout(()=>{

cover.classList.add("open");

},450);


/* Reveal Page */

setTimeout(()=>{

page.style.opacity="1";

page.style.pointerEvents="auto";

page.classList.add("show");

},1200);

}


/*==============================
SEAL CLICK
==============================*/

sealButton.addEventListener(

"click",

openBook

);

/*==================================================
SECTION 3
ENTER BUTTON
==================================================*/


/*==============================
ENTER WEBSITE
==============================*/

function enterWorld(){

document.body.style.pointerEvents="none";

document.body.style.transition="opacity .9s ease";

document.body.style.opacity="0";


setTimeout(()=>{

window.location.href="home.html";

},900);

}


enterButton.addEventListener(

"click",

enterWorld

);


/*==============================
KEYBOARD
==============================*/

document.addEventListener(

"keydown",

(event)=>{

if(event.code==="Enter"){

if(opened){

enterWorld();

}else{

openBook();

}

}

});

/*==================================================
SECTION 4
MOBILE SUPPORT
==================================================*/


/* Prevent Double Tap */

sealButton.addEventListener(

"touchstart",

()=>{

sealButton.style.transform="scale(.96)";

},

{passive:true}

);


sealButton.addEventListener(

"touchend",

()=>{

sealButton.style.transform="";

},

{passive:true}

);


enterButton.addEventListener(

"touchstart",

()=>{

enterButton.style.transform="scale(.98)";

},

{passive:true}

);


enterButton.addEventListener(

"touchend",

()=>{

enterButton.style.transform="";

},

{passive:true}

);

/*==================================================
SECTION 5
SAFETY
==================================================*/


window.addEventListener(

"contextmenu",

(event)=>{

event.preventDefault();

});


window.addEventListener(

"dragstart",

(event)=>{

event.preventDefault();

});


console.log(

"%cAYNOOR ATELIER",

"color:#D4AF37;font-size:18px;font-weight:bold;"

);

console.log(

"Version IV Loaded Successfully."

);
