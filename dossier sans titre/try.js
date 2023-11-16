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


