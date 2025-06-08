// Fonction de téléchargement du CV
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'CV Octave Romer.pdf';
    link.download = 'CV Octave Romer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  // Bloqueurs de scroll (pour le popup)
  function preventScroll(event) {
    event.preventDefault();
  }
  
  function preventArrowScroll(event) {
    const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Space"];
    if (keys.includes(event.key)) {
      event.preventDefault();
    }
  }
  
  function disableScroll() {
    document.body.style.overflow = "hidden";
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("keydown", preventArrowScroll);
  }
  
  function enableScroll() {
    document.body.style.overflow = "";
    document.removeEventListener("wheel", preventScroll);
    document.removeEventListener("touchmove", preventScroll);
    document.removeEventListener("keydown", preventArrowScroll);
  }
  
  // Code exécuté une fois le DOM entièrement chargé
  document.addEventListener("DOMContentLoaded", function() {
    // === GESTION DU POPUP + DÉSACTIVATION DU SCROLL ===
    const toggleButton = document.getElementById("toggle-button");
    const popup = document.getElementById("popup");
    const closeButton = document.querySelector(".close-button");
    const body = document.body;
  
    if (toggleButton && popup && closeButton) {
      toggleButton.addEventListener("click", function() {
        popup.style.display = "flex";
        disableScroll();
      });
  
      closeButton.addEventListener("click", function() {
        popup.style.display = "none";
        enableScroll();
      });
  
      popup.addEventListener("click", function(event) {
        if (event.target === popup) {
          popup.style.display = "none";
          enableScroll();
        }
      });
    }
  
    // === TRADUCTION FR/EN (bouton avec id="translate-button") ===
    const translateButton = document.getElementById('translate-button');
    if (translateButton) {
      // Initialisation du data-lang (par défaut français)
      translateButton.dataset.lang = translateButton.dataset.lang || 'fr';
      translateButton.addEventListener('click', function() {
        const elements = document.querySelectorAll('[data-fr], [data-en]');
        const isInFrench = this.dataset.lang === 'fr';
  
        elements.forEach(function(element) {
          if (isInFrench) {
            if (element.dataset.en) {
              element.innerHTML = element.dataset.en.replace(/\|/g, '<br>');
            }
          } else {
            if (element.dataset.fr) {
              element.innerHTML = element.dataset.fr.replace(/\|/g, '<br>');
            }
          }
        });
  
        // Inverse l’icône et la langue actuelle
        const img = this.querySelector('img');
        if (img) {
          if (isInFrench) {
            img.src = 'drapeau-anglais.avif';
            img.alt = 'Traduire en anglais';
          } else {
            img.src = 'drapeau-francais.jpg';
            img.alt = 'Traduire en français';
          }
        }
  
        this.dataset.lang = isInFrench ? 'en' : 'fr';
      });
    }
  
    // === MÉMOIRE DU BOUTON .header--cta ===
    (function() {
      const button = document.querySelector(".header--cta");
      if (!button) return;
  
      // Restaure l’état depuis le localStorage
      if (localStorage.getItem("buttonVisible") === "true") {
        button.classList.add("is-active");
      }
  
      // Toujours assurer qu’au chargement on ajoute la classe
      button.classList.add("is-active");
  
      button.addEventListener("click", function() {
        button.classList.add("is-active");
        localStorage.setItem("buttonVisible", "true");
      });
    })();
  
    // === NAVIGATION PAR SECTIONS (updateContent) ===
    window.updateContent = function(curPos, nextPos, lastItem) {
      $('.main-content').children().removeClass('section--is-active');
      $('.main-content').children().eq(nextPos).addClass('section--is-active');
      $('.main-content .section').children().removeClass('section--next section--prev');
  
      if ( (curPos === lastItem && nextPos === 0) || (curPos === 0 && nextPos === lastItem) ) {
        $('.main-content .section').children().removeClass('section--next section--prev');
      } else if (curPos < nextPos) {
        $('.main-content').children().eq(curPos).children().addClass('section--next');
      } else {
        $('.main-content').children().eq(curPos).children().addClass('section--prev');
      }
  
      if (nextPos !== lastItem) {
        $('.header--cta').addClass('is-active');
      } else {
        $('.header--cta').removeClass('is-active');
      }
    };
  
    // === ANIMATION DES CERCLES EN FOND ===
    (function() {
      const background = document.getElementById('background');
      if (!background) return;
  
      const numCircles = 5;
      const circles = [];
  
      function createCircles() {
        for (let i = 0; i < numCircles; i++) {
          const circle = document.createElement('div');
          circle.classList.add('circle');
  
          const size = Math.random() * 150 + 50;
          circle.style.width = `${size}px`;
          circle.style.height = `${size}px`;
  
          const x = Math.random() * (window.innerWidth - size);
          const y = Math.random() * (window.innerHeight - size);
          circle.style.left = `${x}px`;
          circle.style.top = `${y}px`;
  
          background.appendChild(circle);
          circles.push({
            element: circle,
            x,
            y,
            size,
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1
          });
        }
      }
  
      function animateCircles() {
        circles.forEach(circle => {
          circle.x += circle.speedX;
          circle.y += circle.speedY;
  
          if (circle.x <= 0 || circle.x + circle.size >= window.innerWidth) {
            circle.speedX *= -1;
          }
          if (circle.y <= 0 || circle.y + circle.size >= window.innerHeight) {
            circle.speedY *= -1;
          }
  
          circle.element.style.left = `${circle.x}px`;
          circle.element.style.top = `${circle.y}px`;
        });
        requestAnimationFrame(animateCircles);
      }
  
      createCircles();
      animateCircles();
    })();
  
    // === FILTRAGE DES PROJETS PAR SEMESTRE + MODAL + CAROUSEL ===
    (function() {
      const filterButtons = document.querySelectorAll('.my-filter-btn');
      const projectCards = document.querySelectorAll('.my-project-card');
      const modalOverlay = document.querySelector('.my-modal-overlay');
      const modalContent = document.querySelector('.my-modal-content');
      const closeModalBtn = document.querySelector('.my-close-modal-btn');
      const carouselSlides = document.querySelectorAll('.my-carousel-slide');
      const prevBtn = document.querySelector('.my-carousel-btn.prev');
      const nextBtn = document.querySelector('.my-carousel-btn.next');
  
      let currentSlide = 0;
  
      function showSlide(index) {
        carouselSlides.forEach(slide => slide.classList.remove('active'));
        if (carouselSlides[index]) {
          carouselSlides[index].classList.add('active');
        }
      }
  
      // Filtrage au clic sur les boutons « Semestre 1 / Semestre 2 / Tout »
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          filterButtons.forEach(btn => btn.classList.remove('my-active'));
          this.classList.add('my-active');
  
          const filterValue = this.getAttribute('data-filter');
  
          projectCards.forEach(card => {
            if (filterValue === 'all' || card.classList.contains(filterValue)) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
  
      // Quand on clique sur une carte, on ouvre la modal + affiche le slide 0
      projectCards.forEach(card => {
        card.addEventListener('click', function() {
          const projectDetails = this.querySelector('img').alt || 'Détails du projet';
          if (modalContent) {
            modalContent.querySelector('p').textContent = `Details about ${projectDetails}`;
          }
          if (modalOverlay) {
            modalOverlay.style.display = 'flex';
          }
          showSlide(0);
        });
  
        // Effet 3D au survol de la carte
        card.addEventListener('mousemove', function(e) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateY = (x - centerX) / 9;
          const rotateX = (centerY - y) / 9;
          card.style.transform = `scale(1.05) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
  
        card.addEventListener('mouseleave', function() {
          card.style.transform = 'scale(1) translateY(0) rotateX(0) rotateY(0)';
        });
      });
  
      // Navigation dans le carousel
      if (prevBtn) {
        prevBtn.addEventListener('click', function() {
          currentSlide = (currentSlide - 1 + carouselSlides.length) % carouselSlides.length;
          showSlide(currentSlide);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', function() {
          currentSlide = (currentSlide + 1) % carouselSlides.length;
          showSlide(currentSlide);
        });
      }
  
      // Fermeture de la modal
      if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
          if (modalOverlay) modalOverlay.style.display = 'none';
        });
      }
      if (modalOverlay) {
        modalOverlay.addEventListener('click', function(event) {
          if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
          }
        });
      }
    })();
  
    // === SUIVI MAUVAIS DÉFINI DE LA CLASSE "card" POUR L'EFFET 3D (si vous avez d’autres cartes .card) ===
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angleX = (e.clientY - centerY) / (rect.height / 2) * 10;
        const angleY = -(e.clientX - centerX) / (rect.width / 2) * 10;
        const inner = card.querySelector('.card-inner');
        if (inner) {
          inner.style.transition = 'transform 0.1s ease-out';
          inner.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(50px)`;
        }
      });
  
      card.addEventListener('mouseleave', () => {
        const inner = card.querySelector('.card-inner');
        if (inner) {
          inner.style.transition = 'transform 0.3s ease-out';
          inner.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
        }
      });
    });
  
    // === BASCULE CLARTÉ / SOMBRE ===
    (function() {
      const themeSwitch = document.getElementById('theme-switch');
      if (!themeSwitch) return;
  
      // Appliquer le thème sauvegardé
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeSwitch.checked = true;
      } else {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = false;
      }
  
      themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
          document.body.classList.add('light-mode');
          document.body.classList.remove('dark-mode');
          localStorage.setItem('theme', 'light');
        } else {
          document.body.classList.add('dark-mode');
          document.body.classList.remove('light-mode');
          localStorage.setItem('theme', 'dark');
        }
      });
    })();
  
  }); // fin du DOMContentLoaded
  

  document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".my-project-card");
  const modal = document.getElementById("my-project-slider-modal");
  const closeBtn = modal.querySelector(".my-slider-close");
  const prevBtn = modal.querySelector(".my-slider-prev");
  const nextBtn = modal.querySelector(".my-slider-next");
  const tracks = modal.querySelectorAll(".my-slider-track");

  let currentProject = null;
  let currentSlideIndex = 0;

  function showSlide(projectId, index) {
    const activeTrack = modal.querySelector(`.my-slider-track[data-project='${projectId}']`);
    if (!activeTrack) return;

    const slideCount = activeTrack.querySelectorAll(".my-slide").length;
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;

    const slideWidth = activeTrack.offsetWidth;
    activeTrack.style.transform = `translateX(-${index * slideWidth}px)`;

    currentSlideIndex = index;
  }

  projectCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      currentProject = card.getAttribute("data-project-id");
      currentSlideIndex = 0;

      // Masquer tous les sliders
      tracks.forEach((track) => {
        track.style.display = "none";
        track.style.transform = "translateX(0)";
      });

      // Afficher seulement celui du projet
      const activeTrack = modal.querySelector(`.my-slider-track[data-project='${currentProject}']`);
      if (activeTrack) {
        activeTrack.style.display = "flex"; // ou "block" selon ton style
        showSlide(currentProject, currentSlideIndex);
      }

      modal.classList.remove("hidden");
      modal.setAttribute("aria-hidden", "false");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  });

  prevBtn.addEventListener("click", () => {
    showSlide(currentProject, currentSlideIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    showSlide(currentProject, currentSlideIndex + 1);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.setAttribute("aria-hidden", "true");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (modal.classList.contains("hidden")) return;

    if (e.key === "ArrowRight") {
      showSlide(currentProject, currentSlideIndex + 1);
    } else if (e.key === "ArrowLeft") {
      showSlide(currentProject, currentSlideIndex - 1);
    } else if (e.key === "Escape") {
      modal.classList.add("hidden");
      modal.setAttribute("aria-hidden", "true");
    }
  });
});

// Gestion du téléchargement des fichiers quand on clique sur une image
document.querySelectorAll(".my-downloadable-image").forEach((img) => {
  img.addEventListener("click", (e) => {
    e.stopPropagation(); // évite de fermer le modal si cliqué
    const fileUrl = img.getAttribute("data-file");

    if (fileUrl) {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = ""; // permet de forcer le téléchargement
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
});
