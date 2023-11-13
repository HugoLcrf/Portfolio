
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


