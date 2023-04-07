
//======= MENU-DROPDOWN =======//

document.querySelector(".dropdown-arrow").addEventListener("click", openMenu);

function openMenu(){

  let menuCategories = document.getElementById("dropdown-categories");

  menuCategories.classList.toggle("visible");
  
}


//======== FENÊTRE MODALE ========//

const searchLink = document.querySelector('.search');

searchLink.addEventListener('click', openModal);

function openModal() {
  const modal = document.querySelector('.modal');
  modal.classList.toggle('active');
}
