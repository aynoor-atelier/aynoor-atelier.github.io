/*======================================
AYNOOR ATELIER

MAIN.JS
PART 1
======================================*/

const book=document.getElementById("book");

const seal=document.querySelector(".seal");

const enter=document.getElementById("enterVault");

const sealSound=document.getElementById("sealSound");

const pageSound=document.getElementById("pageSound");


/*======================================
BREAK SEAL
======================================*/

seal.addEventListener("click",()=>{

if(sealSound){

sealSound.currentTime=0;

sealSound.play();

}

book.classList.add("open");

});


/*======================================
ENTER BUTTON
======================================*/

enter.addEventListener("click",()=>{

window.location.href="home.html";

});

/*======================================
SPOTLIGHT FOLLOW
======================================*/

const light=document.querySelector(".spotlight");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX;

const y=e.clientY;

light.style.background=

`radial-gradient(

circle at ${x}px ${y}px,

rgba(255,215,120,.10),

transparent 60%

)`;

});


/*======================================
BOOK TILT
======================================*/

document.addEventListener("mousemove",(e)=>{

const rx=(window.innerHeight/2-e.clientY)/55;

const ry=(e.clientX-window.innerWidth/2)/55;

book.style.transform=

`rotateX(${rx}deg)

rotateY(${ry}deg)`;

});


document.addEventListener("mouseleave",()=>{

book.style.transform=

"rotateX(0deg) rotateY(0deg)";

});

/*======================================
PAGE SOUND
======================================*/

book.addEventListener("transitionend",()=>{

if(book.classList.contains("open")){

if(pageSound){

pageSound.currentTime=0;

pageSound.play();

}

}

});


/*======================================
SEAL HOVER
======================================*/

seal.addEventListener("mouseenter",()=>{

seal.style.transform="scale(1.06)";

});

seal.addEventListener("mouseleave",()=>{

seal.style.transform="scale(1)";

});


/*======================================
END
======================================*/
