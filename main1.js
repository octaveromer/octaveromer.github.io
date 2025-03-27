function downloadCV() {
    const link = document.createElement('a');
    link.href = 'CV Octave Romer.pdf';
    link.download = 'CV Octave Romer.pdf'; // Nom du fichier à télécharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn-qualification").addEventListener("click", function () {
        let section = document.getElementById("qualification-section");

        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
});



const toggleButton = document.getElementById("toggle-button");
        const popup = document.getElementById("popup");
        const closeButton = document.querySelector(".close-button");
        const body = document.body;

        toggleButton.addEventListener("click", function() {
            popup.style.display = "flex";
            body.classList.add("noscroll"); // Désactive le scroll de la page
        });

        closeButton.addEventListener("click", function() {
            popup.style.display = "none";
            body.classList.remove("noscroll"); // Réactive le scroll de la page
        });

        popup.addEventListener("click", function(event) {
            if (event.target === popup) {
                popup.style.display = "none";
                body.classList.remove("noscroll"); // Réactive le scroll de la page
            }
        });
        
        function disableScroll() {
            window.scrollTo(0, 0); // Reste fixe en haut de la page
            document.body.style.overflow = "hidden"; // Désactive le scroll
            document.addEventListener("wheel", preventScroll, { passive: false });
            document.addEventListener("touchmove", preventScroll, { passive: false });
            document.addEventListener("keydown", preventArrowScroll);
        }
        
        function enableScroll() {
            document.body.style.overflow = ""; // Réactive le scroll
            document.removeEventListener("wheel", preventScroll);
            document.removeEventListener("touchmove", preventScroll);
            document.removeEventListener("keydown", preventArrowScroll);
        }
        
        function preventScroll(event) {
            event.preventDefault();
        }
        
        function preventArrowScroll(event) {
            const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"];
            if (keys.includes(event.key)) {
                event.preventDefault();
            }
        }
        
        toggleButton.addEventListener("click", function() {
            popup.style.display = "flex";
            disableScroll(); // Désactive tout scroll
        });
        
        closeButton.addEventListener("click", function() {
            popup.style.display = "none";
            enableScroll(); // Réactive le scroll
        });
        
        popup.addEventListener("click", function(event) {
            if (event.target === popup) {
                popup.style.display = "none";
                enableScroll();
            }
        });





        

        
           




        
        document.getElementById('translate-button').addEventListener('click', function() {
            var elements = document.querySelectorAll('[data-fr], [data-en]');
            var isInFrench = this.dataset.lang === 'fr';  // Vérifier si la langue actuelle est le français
        
            elements.forEach(function(element) {
                if (isInFrench) {
                    if (element.dataset.en) {
                        element.innerHTML = element.dataset.en.replace(/\|/g, '<br>'); // Remplacer | par <br>
                    }
                } else {
                    if (element.dataset.fr) {
                        element.innerHTML = element.dataset.fr.replace(/\|/g, '<br>'); // Remplacer | par <br>
                    }
                }
            });
        
            // Modifier l'icône du bouton au lieu du texte
            var img = this.querySelector('img');
            if (img) {
                img.src = isInFrench ? 'drapeau-francais.jpg' : 'drapeau-anglais.avif';
                img.alt = isInFrench ? 'Traduire en français' : 'Traduire en anglais';
            }
        
            // Mise à jour de l'attribut data-lang pour indiquer la langue actuelle
            this.dataset.lang = isInFrench ? 'en' : 'fr';
        });

        document.addEventListener("DOMContentLoaded", function () {
            const button = document.querySelector(".header--cta");
        
            if (!button) return; // Sécurité si le bouton n'existe pas
        
            // Activer le bouton immédiatement au chargement
            button.classList.add("is-active");
        
            // Vérifier et restaurer l'état précédent
            if (localStorage.getItem("buttonVisible") === "true") {
                button.classList.add("is-active");
            }
        
            // Ajouter l'événement de clic une seule fois
            button.addEventListener("click", function () {
                button.classList.add("is-active");
                localStorage.setItem("buttonVisible", "true");
            });
        });





        function updateContent(curPos, nextPos, lastItem) {
            $('.main-content').children().removeClass('section--is-active');
            $('.main-content').children().eq(nextPos).addClass('section--is-active');
            $('.main-content .section').children().removeClass('section--next section--prev');
        
            if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
                $('.main-content .section').children().removeClass('section--next section--prev');
            } else if (curPos < nextPos) {
                $('.main-content').children().eq(curPos).children().addClass('section--next');
            } else {
                $('.main-content').children().eq(curPos).children().addClass('section--prev');
            }
        
            // Modification ici : le bouton est actif sauf sur la dernière page
            if (nextPos !== lastItem) {
                $('.header--cta').addClass('is-active');
            } else {
                $('.header--cta').removeClass('is-active');
            }
        }