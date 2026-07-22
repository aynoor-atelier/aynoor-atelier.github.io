const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{

opacity:0,

transform:"translateY(40px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:800,

fill:"forwards"

});

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

observer.observe(card);

});
