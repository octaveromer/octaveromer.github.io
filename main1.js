function downloadCV() {
    const link = document.createElement('a');
    link.href = 'CV Octave Romer.pdf';
    link.download = 'CV Octave Romer.pdf'; // Nom du fichier à télécharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  




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




        function toggleSkills(id) {
            let content = document.getElementById(id);
            let arrow = content.parentElement.querySelector('.arrow'); // Corrige le ciblage de .arrow
        
            // Vérifie si l'élément est visible avec getComputedStyle
            let isVisible = getComputedStyle(content).display !== "none";
        
            if (isVisible) {
                content.style.display = "none";
                arrow.style.transform = "rotate(0deg)";
            } else {
                content.style.display = "block";
                arrow.style.transform = "rotate(180deg)";
                animateBars(content);
            }
        }
        
        function animateBars(container) {
            let bars = container.querySelectorAll('.fill');
            
            bars.forEach((bar) => {
                let width = bar.getAttribute('data-width');
                bar.style.width = "0";
        
                setTimeout(() => {
                    bar.style.width = width + "%";
                }, 200);
            });
        }
        
        

        function showTab(tabName) {
            const tabs = document.querySelectorAll('.tab-content');
            const buttons = document.querySelectorAll('.tab');
        
            tabs.forEach(tab => tab.classList.remove('active'));
            buttons.forEach(button => button.classList.remove('active'));
        
            document.getElementById(tabName).classList.add('active');
            document.querySelector(`.tab[onclick="showTab('${tabName}')"]`).classList.add('active');
        }
        
        
        
        const background = document.getElementById('background');
        const numCircles = 5; // Nombre fixe de cercles
        const circles = [];
        
        // Fonction pour créer les cercles une seule fois
        function createCircles() {
            for (let i = 0; i < numCircles; i++) {
                const circle = document.createElement('div');
                circle.classList.add('circle');
        
                // Taille aléatoire
                const size = Math.random() * 150 + 50; // Entre 50px et 200px
                circle.style.width = `${size}px`;
                circle.style.height = `${size}px`;
        
                // Position aléatoire initiale
                const x = Math.random() * (window.innerWidth - size);
                const y = Math.random() * (window.innerHeight - size);
                circle.style.left = `${x}px`;
                circle.style.top = `${y}px`;
        
                // Ajouter le cercle au DOM
                background.appendChild(circle);
                circles.push({ element: circle, x, y, size, speedX: Math.random() * 2 - 1, speedY: Math.random() * 2 - 1 });
            }
        }
        
        // Fonction pour animer les cercles en continu
        function animateCircles() {
            circles.forEach(circle => {
                circle.x += circle.speedX;
                circle.y += circle.speedY;
        
                // Collision avec les bords
                if (circle.x <= 0 || circle.x + circle.size >= window.innerWidth) {
                    circle.speedX *= -1;
                }
                if (circle.y <= 0 || circle.y + circle.size >= window.innerHeight) {
                    circle.speedY *= -1;
                }
        
                // Appliquer la nouvelle position
                circle.element.style.left = `${circle.x}px`;
                circle.element.style.top = `${circle.y}px`;
            });
        
            requestAnimationFrame(animateCircles);
        }
        
        // Lancer l'animation
        createCircles();
        animateCircles();
        