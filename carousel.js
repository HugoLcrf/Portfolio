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
