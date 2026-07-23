/*==================================================
AYNOOR ATELIER
HOME.JS
CAPITAL OF CHRONICLES
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
      HERO FADE
    ==============================*/

    document.body.style.opacity = "0";

    requestAnimationFrame(() => {

        document.body.style.transition = "opacity 1.2s ease";

        document.body.style.opacity = "1";

    });



    /*==============================
      ENTER BUTTON
    ==============================*/

    const enterButton = document.querySelector(".enter-btn");

    if (enterButton) {

        enterButton.addEventListener("click", function (e) {

            e.preventDefault();

            const destination = this.getAttribute("href");

            /* Page Fade Out */

            document.body.style.transition = "opacity .8s ease";

            document.body.style.opacity = "0";

            setTimeout(() => {

                window.location.href = destination;

            }, 700);

        });

    }



    /*==============================
      SCROLL INDICATOR
    ==============================*/

    const scroll = document.querySelector(".scroll-indicator");

    if (scroll) {

        setInterval(() => {

            scroll.animate(

                [

                    {

                        transform: "translateY(0px)",

                        opacity: .45

                    },

                    {

                        transform: "translateY(8px)",

                        opacity: 1

                    },

                    {

                        transform: "translateY(0px)",

                        opacity: .45

                    }

                ],

                {

                    duration: 2200,

                    easing: "ease-in-out"

                }

            );

        }, 2200);

    }



    /*==============================
      PAGE TITLE
    ==============================*/

    document.title =

        "Aynoor Atelier | Capital of Chronicles";



    /*==============================
      READY
    ==============================*/

    console.log(

        "%cAynoor Atelier Ready",

        "color:#B68A5A;font-size:15px;font-family:Cinzel,serif;"

    );

});
