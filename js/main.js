let isAudioUnlocked = false;

// Function to unlock mobile browser audio engine on first screen interaction
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
    console.log("Audio Engine Unlocked!");

    window.removeEventListener("click", unlockAudioEngine);
    window.removeEventListener("touchstart", unlockAudioEngine);
}

window.addEventListener("click", unlockAudioEngine);
window.addEventListener("touchstart", unlockAudioEngine);

function openArchiveBook(){

const book=document.getElementById("book");

const seal=document.getElementById("sealTrigger");

const sealSound=document.getElementById("sealSound");

seal.style.pointerEvents="none";

seal.animate([

{

transform:"scale(1)"

},

{

transform:"scale(.92)"

},

{

transform:"scale(1.18) rotate(6deg)"

},

{

transform:"scale(0)"

}

],{

duration:650,

fill:"forwards",

easing:"cubic-bezier(.22,.8,.18,1)"

});

sealSound.currentTime=0;

sealSound.play();

setTimeout(()=>{

book.classList.add("open");

},300);

}

// Vault Navigation & Sound Handler
document.addEventListener("DOMContentLoaded", () => {
    const sealTrigger = document.getElementById("sealTrigger");
    const enterVaultBtn = document.getElementById("enterVault");
    const pageSound = document.getElementById("pageSound");

    if (sealTrigger) {
        sealTrigger.addEventListener("click", openArchiveBook);
    }

    if (enterVaultBtn) {
        enterVaultBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Navigation ko momentary pause karenge audio chalane ke liye

            if (pageSound) {
                pageSound.currentTime = 0;
                let redirected = false;

                const goToNextPage = () => {
                    if (!redirected) {
                        redirected = true;
                        window.location.href = "home.html";
                    }
                };

                // Play audio and redirect after playback
                pageSound.play().then(() => {
                    setTimeout(goToNextPage, 400); // Sound ka initial part sunayi dete hi redirect
                }).catch(() => {
                    goToNextPage(); // Playback fail ho to turant redirected
                });

                // Fallback timer
                setTimeout(goToNextPage, 600);
            } else {
                window.location.href = "home.html";
            }
        });
    }
});

