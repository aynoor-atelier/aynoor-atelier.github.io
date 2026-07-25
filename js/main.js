// Open Archive Book Function (Global)
window.openArchiveBook = function() {
    const book = document.getElementById("book");
    const sealSound = document.getElementById("sealSound");

    if (sealSound) {  
        sealSound.currentTime = 0;  
        sealSound.play().catch(err => console.warn("Audio play issue:", err));  
    }  

    if (book) {  
        book.classList.add("open");  
    }
};

// Vault Navigation
document.addEventListener("DOMContentLoaded", () => {
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    if (enterVaultBtn) {  
        enterVaultBtn.addEventListener("click", (e) => {  
            e.preventDefault();  

            if (pageSound) {  
                pageSound.currentTime = 0;  
                let redirected = false;  

                const goToNextPage = () => {  
                    if (!redirected) {  
                        redirected = true;  
                        window.location.href = "home.html";  
                    }  
                };  

                pageSound.play().then(() => {  
                    setTimeout(goToNextPage, 350);  
                }).catch(() => {  
                    goToNextPage();  
                });  

                setTimeout(goToNextPage, 500);  
            } else {  
                window.location.href = "home.html";  
            }  
        });  
    }
});

