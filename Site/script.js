

document.addEventListener("DOMContentLoaded", function() {
  const loaderWrapper = document.querySelector(".loader-wrapper");
  const preloaderCounters = document.querySelectorAll(".preloader_counter");
  

  // Durée approximative du chargement en millisecondes
  const loadingDuration = 3000;

  const updateInterval = 30; // Intervalle de mise à jour du compteur (en millisecondes)

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

myButton.addEventListener("click", function() {
  targetRotation += 135; // Rotation cible à 60 degrés de plus
  animateRotation();

  // Afficher ou masquer le menu
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
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

// Récupérer le bouton et le corps du document
const changeBlendModeButton = document.getElementById('changeBlendMode');
const body = document.body;

// Fonction pour ajouter ou supprimer la classe avec mix-blend-mode
function toggleBlendMode() {
  // Ajouter ou supprimer la classe "difference" au body
  body.classList.toggle('difference');
}

// Ajouter un écouteur d'événements pour le clic sur le bouton
changeBlendModeButton.addEventListener('click', toggleBlendMode);



