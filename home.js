const button = document.querySelector(".enter-btn");

button.addEventListener("mouseenter",()=>{

    button.style.boxShadow="0 0 30px rgba(166,124,82,.35)";

});

button.addEventListener("mouseleave",()=>{

    button.style.boxShadow="none";

});
