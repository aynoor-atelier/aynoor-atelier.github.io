let isAudioUnlocked = false;

// Audio Engine Pre-load for Mobile Browsers
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

// Open Archive Book Function (Force Triggering Animation)
window.openArchiveBook = function() {
    const book = document.getElementById("book");
    const sealSound = document.getElementById("sealSound");

    // 1. Play Sound
    if (sealSound) {  
        sealSound.currentTime = 0;  
        sealSound.play().catch(err => console.warn("Audio play issue:", err));  
    }  

    // 2. Force Apply 3D Open Animation via RequestAnimationFrame
    if (book) {  
        requestAnimationFrame(() => {
            book.classList.add("open");
        });
    }
};

// Vault Route Listener
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
