
//======= MENU-DROPDOWN =======//

document.querySelector(".dropdown-arrow1").addEventListener("click", openMenuCategories);
document.querySelector(".dropdown-arrow2").addEventListener("click", openMenuCouleurs);

function openMenuCategories(){

  let menuCategories = document.getElementById("dropdown-categories");
  menuCategories.classList.toggle("visible");
   
}

function openMenuCouleurs(){

  let menuCouleurs = document.getElementById("dropdown-couleurs");
  menuCouleurs.classList.toggle("visible");
}


//======== FENÊTRE MODALE RECHERCHE ========//

const modal = document.querySelector('.modal');
const searchLink = document.querySelector('.search');
const close = document.querySelector('.close');

searchLink.addEventListener('click', openModal);
close.addEventListener("click", closeModal);


function openModal() {

  modal.classList.add('active');
  
}

function closeModal(){

  modal.classList.remove('active');

}
