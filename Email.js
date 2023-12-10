//ABOUT PAGE //

let mail = document.getElementById("mail");

mail.addEventListener('click', () => {

  let tempTextarea = document.createElement('textarea');
  // Assigner la valeur du texte que vous voulez copier
  tempTextarea.value = "lecerf.hugo04@gmail.com";
  // Ajouter l'élément au DOM
  document.body.appendChild(tempTextarea);
  // Sélectionner le texte dans l'élément
  tempTextarea.select();
  // Exécuter la commande de copie
  document.execCommand('copy');
  // Supprimer l'élément temporaire du DOM
  document.body.removeChild(tempTextarea);
  
  // Mettre à jour le texte du lien
  mail.innerText = "Email copied !";
  setTimeout(() => {
    mail.innerText = "Email";
  }, 2000);
});