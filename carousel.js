
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray("#carousel .item");
sections.forEach((section, index) => {
  gsap.to(section, {
    xPercent: -100,
    xPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => "+=" + section.offsetWidth,
      start: "top",
      end: () => `+=${section.offsetWidth}`,
      pin: true,
      scrub: 1,
    }
  });
});
// Animation du carrousel
gsap.to("#carousel", {
  xPercent: -100 * (sections.length - 1), // Ajout pour couvrir tous les éléments du carrousel
  ease: "none",
  scrollTrigger: {
    trigger: "#carousel", // Utilisez le conteneur du carrousel comme déclencheur
    start: "top-=10px",
    end: () => `+=${sections[sections.length - 1].offsetWidth}`, // Utilise la largeur du dernier élément
    pin: true,
    scrub: 1,
  }
});


//  Contenue a droite

function showContent(contentId) {
  // Masquer tous les contenus
  var contents = document.querySelectorAll('.content');
  contents.forEach(function (content) {
      content.style.display = 'none';
  });

  // Afficher le contenu spécifique
  document.getElementById(contentId).style.display = 'block';

  // Afficher le volet à droite
  document.getElementById('drawer-wrapper').classList.add('visible');
}

function closeDrawer() {
  // Cacher le volet à droite
  document.getElementById('drawer-wrapper').classList.remove('visible');
}



