let isAudioUnlocked = false;

// Mobile Web Audio Unlocker
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

// Open Book & Play Sound Handler
function openArchiveBook() {
    const book = document.getElementById("book");
    const sealSound = document.getElementById("sealSound");

    // Play Seal Sound Immediately
    if (sealSound) {  
        sealSound.currentTime = 0;  
        sealSound.play().catch(err => console.warn("Audio play blocked:", err));  
    }  

    // Flip Open Cover
    if (book) {  
        book.classList.add("open");  
    }
}

// Global Event Listeners Setup
document.addEventListener("DOMContentLoaded", () => {
    const sealWrapper = document.getElementById("sealTrigger");
    const sealImg = document.querySelector(".seal");
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    // Direct Click Bindings for Both Wrapper & Image directly
    if (sealWrapper) {  
        sealWrapper.addEventListener("click", openArchiveBook);  
    }  
    if (sealImg) {
        sealImg.addEventListener("click", openArchiveBook);
    }

    // Vault Button Direct Routing with Sound Effect
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
