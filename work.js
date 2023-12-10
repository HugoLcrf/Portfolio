AOS.init();

//Navbar rotation
var rotation = 0;
var targetRotation = 0;
var rotationStep = 2; // La vitesse de rotation

var rotate = function(element, degree) {
  var bbox = element.getBBox();
  var centerX = bbox.x + bbox.width / 2;
  var centerY = bbox.y + bbox.height / 2;
  var transformValue = "rotate(" + degree + " " + centerX + " " + centerY + ")";
  element.setAttribute("transform", transformValue);
};

var animateRotation = function() {
  if (rotation !== targetRotation) {
    if (Math.abs(rotation - targetRotation) <= rotationStep) {
      rotation = targetRotation;
    } else if (rotation < targetRotation) {
      rotation += rotationStep;
    }
    rotate(document.getElementById("losange"), rotation);
    requestAnimationFrame(animateRotation);
  }
};

//Affiche navbar
var myButton = document.getElementById("buttonNav");
var menu = document.getElementById("menu");
var sectionsToHide = ["work-section","contact-section","Bottom","about-section","project-section"];

myButton.addEventListener("click", function() {
  targetRotation += 135; // Rotation cible à 60 degrés de plus
  animateRotation();

  // Afficher ou masquer le menu
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    showSections(); // Affiche toutes les sections
  } else {
    menu.style.display = "flex";
    hideSections(); // Masque toutes les sections
  }
});

function hideSections() {
  sectionsToHide.forEach(function(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.style.display = "none";
      section.classList.remove("fade-in-down");
    }
  });
}

function showSections() {
  sectionsToHide.forEach(function(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      if (sectionId === "Bottom") {
        section.style.display = "flex";
      } else {
        section.style.display = "block";
      }
      section.classList.add("fade-in-down");
    }
  });
}

//POSITIONNEMENT NAVBAR AVEC ANIMATION AU SCROLL
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  const firstALink = document.querySelector("#top-nav a");
  const buttonNav = document.querySelector("#buttonNav");


  if (st > lastScrollTop) {
    //Défiler vers le bas
    firstALink.style.transform = "translateY(-110%) translateX(-50%)";
    buttonNav.style.transform = "translateY(-110%) translateX(100%)";

  } else {
    //Défiler vers le haut
    firstALink.style.transform = "translateY(0)";
    buttonNav.style.transform = "translateY(0)";
  }

  lastScrollTop = st <= 0 ? 0 : st;
});

//CURSOR

document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  
  // // Récupérer le bouton et le corps du document
  // const changeBlendModeButton = document.getElementById('changeBlendMode');
  // const body = document.body;
  
  // // Fonction pour ajouter ou supprimer la classe avec mix-blend-mode
  // function toggleBlendMode() {
  //   // Ajouter ou supprimer la classe "difference" au body
  //   body.classList.toggle('difference');
  // }
  
  // // Ajouter un écouteur d'événements pour le clic sur le bouton
  // changeBlendModeButton.addEventListener('click', toggleBlendMode);
  

  //ASSOMBRIRE LA PAGE AU Scroll

document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");

  window.addEventListener("scroll", function () {
    var scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

    // Réglez le pourcentage de défilement à partir duquel l'overlay doit être activé
    var activationThreshold = 20;

    if (scrollPercentage > activationThreshold) {
      overlay.style.display = "block";
      document.body.classList.add("overlay-active");
    } else {
      overlay.style.display = "none";
      document.body.classList.remove("overlay-active");
    }
  });
});