document.addEventListener("DOMContentLoaded",()=>{

initLexicon();

});

function initLexicon(){

const entries=document.querySelectorAll(".lexicon-entry");

entries.forEach((entry)=>{

const header=entry.querySelector(":scope > .accordion-header");

if(!header) return;

updateIcon(entry);

header.addEventListener("click",(event)=>{

event.stopPropagation();

const isOpen=entry.classList.contains("active");

closeOtherEntries(entry);

if(isOpen){

entry.classList.remove("active");

}

else{

entry.classList.add("active");

}

updateIcon(entry);

});

});

}

function closeOtherEntries(current){

const container=current.parentElement;

container.querySelectorAll(".lexicon-entry.active").forEach((entry)=>{

if(entry!==current){

entry.classList.remove("active");

updateIcon(entry);

}

});

}

function updateIcon(entry){

const icon=entry.querySelector(":scope > .accordion-header .accordion-icon");

if(!icon) return;

icon.textContent=entry.classList.contains("active")?"▾":"▸";

}
