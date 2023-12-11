gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray("#carousel .item");

sections.forEach((section, index) => {
  gsap.to(section, {
    xPercent: 0,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${section.offsetWidth}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        // Ajouter overflow: visible lorsque l'animation commence
        if (self.progress > 0) {
          document.getElementById("carousel").style.overflow = "visible";
        }
      },
      onLeaveBack: () => {
        // Retirer overflow: visible lorsque l'animation se termine
        document.getElementById("carousel").style.overflow = "";
      },
    },
  });
});

// Animation du carrousel
gsap.to("#carousel", {
  xPercent: -240 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#carousel",
    start: "top-=10px",
    end: () => `+=${sections[sections.length - 1].offsetWidth}`,
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      // Ajouter overflow: visible lorsque l'animation commence
      if (self.progress > 0) {
        document.getElementById("carousel").style.overflow = "visible";
      }
    },
    onLeaveBack: () => {
      // Retirer overflow: visible lorsque l'animation se termine
      document.getElementById("carousel").style.overflow = "";
    },
  },
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



