gsap.registerPlugin(ScrollTrigger);

let section = document.getElementById("carousel")

console.log("L'élément avec l'ID 'carousel' existe :", section);


let sections = gsap.utils.toArray(section)


gsap.to(section,{
  xPercent:-100 * (sections.length - 1),
  ease:"none",
  ScrollTrigger:{
    trigger:".item",
    pin: true,
    scrub:1,
    snap: 1/(sections.length - 1),
    end:() => "+=" +
    document.querySelector(".item").offsetWidth
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


