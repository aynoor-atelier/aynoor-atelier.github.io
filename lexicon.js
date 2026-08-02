console.log("Lexicon JS Loaded");
document.addEventListener("DOMContentLoaded",()=>{

initLexicon();

});

function initLexicon(){
console.log("Init Lexicon");
const entries=document.querySelectorAll(".lexicon-entry");

entries.forEach((entry)=>{

const header = entry.children[0];

if(!header) return;

updateIcon(entry);

header.addEventListener("click",(event)=>{
console.log("Header Click");
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

const icon = entry.children[0].querySelector(".accordion-icon");

if(!icon) return;

icon.textContent=entry.classList.contains("active")?"▾":"▸";

}
