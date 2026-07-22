const button = document.getElementById("enter");


button.addEventListener("click",()=>{


window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});


});



window.addEventListener("scroll",()=>{


let sections=document.querySelectorAll("section");


sections.forEach(sec=>{


let position=sec.getBoundingClientRect().top;


if(position < window.innerHeight-100){

sec.style.opacity="1";

}

});


});
