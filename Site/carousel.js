document.getElementById("carousel").addEventListener('wheel', function(event) {
  var modifier = 1;

  if (event.deltaMode == event.DOM_DELTA_PIXEL) {
    modifier = 1;
  } else if (event.deltaMode == event.DOM_DELTA_LINE) {
    modifier = parseInt(getComputedStyle(this).lineHeight);
  } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
    modifier = this.clientHeight;
  }

  if (isNaN(modifier)) {
    modifier = 10;
  }

  if (event.deltaY != 0) {
    this.scrollLeft += modifier * event.deltaY;
    event.preventDefault();

    // Vérifier si le défilement horizontal atteint les limites
    if (this.scrollLeft + this.clientWidth >= this.scrollWidth) {
      // Si oui, passer à la section suivante
      document.getElementById("Bottom").scrollIntoView({ behavior: 'smooth' });
    }
  }
});

function handleHorizontalScroll(event) {
  event.preventDefault();
}

function handleVerticalScroll(event) {
  document.getElementById("Bottom").scrollIntoView({ behavior: 'smooth' });
}


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


