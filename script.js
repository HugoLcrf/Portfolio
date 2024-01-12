AOS.init();


document.addEventListener("DOMContentLoaded", function() {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  const preloaderCounters = document.querySelectorAll(".preloader_counter");
  

  // Durée approximative du chargement en millisecondes
  const loadingDuration = 3000;

  const updateInterval = 300; // Intervalle de mise à jour du compteur (en millisecondes)

  // Fonction pour mettre à jour le compteur
  const updateCounter = (counter, delay) => {
      let currentTime = 0;
      let currentValue = 0;

      // Calculez l'incrémentation en fonction de l'intervalle de mise à jour
      const increment = 100 / (loadingDuration / updateInterval);

      // Attendez le délai spécifié avant de commencer le compteur
      setTimeout(() => {
          const update = () => {
              if (currentValue < 100) {
                  currentValue += increment;
                  counter.textContent = Math.round(currentValue);
                  requestAnimationFrame(update);
              }
          };

          requestAnimationFrame(update);
      }, delay);
  };

  preloaderCounters.forEach((counter) => {
      const delay = parseInt(counter.getAttribute("data-delay"));
      updateCounter(counter, delay);
  });

  // Masquez l'écran de chargement après la fin du chargement
  setTimeout(function() {
      loaderWrapper.style.display = "none";
  }, loadingDuration);
});



//Navbar rotation
var rotation = 0;
var targetRotation = 0;
var rotationStep = 2;

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

// Affiche navbar
var myButton = document.getElementById("buttonNav");
var menu = document.getElementById("menu");
var sectionsToHide = ["Homepage", "carousel", "TXT", "Bottom", "Boucle", "pin-spacer"];

myButton.addEventListener("click", function () {
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
  sectionsToHide.forEach(function (sectionId) {
    if (sectionId === "pin-spacer") {
      var sections = document.getElementsByClassName(sectionId);
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
        sections[i].classList.remove("fade-in-down");
      }
    } else {
      var section = document.getElementById(sectionId);
      if (section) {
        section.style.display = "none";
        section.classList.remove("fade-in-down");
      }
    }
  });
}


function showSections() {
  sectionsToHide.forEach(function (sectionId) {
    if (sectionId === "pin-spacer") {
      var sections = document.getElementsByClassName(sectionId);
      for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "flex";
        sections[i].classList.add("fade-in-down");
      }
    } else {
      var section = document.getElementById(sectionId);
      if (section) {
        section.style.display = "flex";
        section.classList.add("fade-in-down");
      }
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

//CURSOR

document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// // Récupérer le bouton et le corps du document  ANNULER PAS TRES UTILES ET PROBLEME DE Z INDEX SUR TOUS LE SITE
// const changeBlendModeButton = document.getElementById('changeBlendMode');
// const body = document.body;

// function toggleBlendMode() {
//   body.classList.toggle('difference');
// }

// // Ajouter un écouteur d'événements pour le clic sur le bouton
// changeBlendModeButton.addEventListener('click', toggleBlendMode);



//Deroulement infinit

const pixelHeightBottom = 1;

// Gestionnaire d'événements de défilement
window.addEventListener('scroll', function() {
    // Vérifiez si l'utilisateur a atteint le bas de la page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        window.scrollTo(0, 0);
    }
});


















