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
      // Si oui, permettre le défilement vertical
      this.removeEventListener('wheel', handleHorizontalScroll);
      this.addEventListener('wheel', handleVerticalScroll);
    }
  }
});

function handleHorizontalScroll(event) {
  event.preventDefault();
}

function handleVerticalScroll(event) {
  document.getElementById("nextSection").scrollIntoView({ behavior: 'smooth' });
}


//  Contenue a droite

var drawerWrapper = document.getElementById('drawer-wrapper');

document.addEventListener('click', function (event) {
  // Vérifier si le clic n'est pas à l'intérieur de drawer-wrapper et si la div est visible
  if (!drawerWrapper.contains(event.target) && !drawerWrapper.classList.contains('visible')) {
    // Afficher la classe .visible au premier clic
    drawerWrapper.classList.add('visible');
  }
});

function showContent(contentId) {
  // Masquer tous les contenus
  var contents = document.querySelectorAll('.content');
  contents.forEach(function (content) {
    content.style.display = 'none';
  });

  // Afficher le contenu spécifique
  document.getElementById(contentId).style.display = 'block';
}

function closeDrawer() {
  // Cacher le volet à droite
  drawerWrapper.classList.remove('visible');
}


