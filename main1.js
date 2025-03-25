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