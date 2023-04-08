
//======= MENU-DROPDOWN =======//

document.querySelector(".dropdown-arrow").addEventListener("click", openMenu);

function openMenu(){

  let menuCategories = document.getElementById("dropdown-categories");

  menuCategories.classList.toggle("visible");
  
}


//======== FENÊTRE MODALE ========//

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
