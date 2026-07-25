let isAudioUnlocked = false;

// Unlock mobile audio engine on first interaction
function unlockAudioEngine() {
    if (isAudioUnlocked) return;

    const sealSound = document.getElementById("sealSound");  
    const pageSound = document.getElementById("pageSound");  

    [sealSound, pageSound].forEach(audio => {  
        if (audio) {  
            audio.play().then(() => {  
                audio.pause();  
                audio.currentTime = 0;  
            }).catch(() => {});  
        }  
    });  

    isAudioUnlocked = true;  
    window.removeEventListener("click", unlockAudioEngine);  
    window.removeEventListener("touchstart", unlockAudioEngine);
}

window.addEventListener("click", unlockAudioEngine);
window.addEventListener("touchstart", unlockAudioEngine);

// Open Archive Book Handler
function openArchiveBook() {
    const book = document.getElementById("book");
    const sealSound = document.getElementById("sealSound");

    if (sealSound) {  
        sealSound.currentTime = 0;  
        sealSound.play().catch(err => console.warn("Seal sound blocked/missing:", err));  
    }  

    if (book) {  
        book.classList.add("open");  
    }
}

// Event Listeners Setup
document.addEventListener("DOMContentLoaded", () => {
    const sealTrigger = document.getElementById("sealTrigger");
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    if (sealTrigger) {  
        sealTrigger.addEventListener("click", openArchiveBook);  
    }  

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
                    setTimeout(goToNextPage, 400);  
                }).catch(() => {  
                    goToNextPage();  
                });  

                setTimeout(goToNextPage, 600);  
            } else {  
                window.location.href = "home.html";  
            }  
        });  
    }
});
