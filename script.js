// Initialisation du Swiper
var swiper = new Swiper('.swiper-container', {
    loop: true, // Défilement infini
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000, // Slide toutes les 3 secondes
        disableOnInteraction: false, // Continue même si l'utilisateur clique
    },
    effect: "slide", // Options : "slide", "fade", "cube", "coverflow"
});
