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

// Master Open Function
window.openArchiveBook = function() {
    const book = document.getElementById("book");
    const cover = document.getElementById("cover");
    const sealSound = document.getElementById("sealSound");

    // 1. Play Sound Effect
    if (sealSound) {  
        sealSound.currentTime = 0;  
        sealSound.play().catch(err => console.warn("Audio play issue:", err));  
    }  

    // 2. Class Toggle
    if (book) {
        book.classList.add("open");
    }

    // 3. Direct Brute Force Inline Transform on Cover
    if (cover) {
        cover.classList.add("turned");
        cover.style.setProperty("transform", "rotateY(-140deg)", "important");
        cover.style.setProperty("-webkit-transform", "rotateY(-140deg)", "important");
        cover.style.setProperty("pointer-events", "none", "important");
        cover.style.setProperty("z-index", "1", "important");
    }
};

// Vault Navigation Handler
document.addEventListener("DOMContentLoaded", () => {
    const sealTrigger = document.getElementById("sealTrigger");
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    if (sealTrigger) {
        sealTrigger.addEventListener("click", window.openArchiveBook);
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
