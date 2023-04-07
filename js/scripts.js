
//======= MENU-DROPDOWN =======//

document.querySelector(".dropdown-arrow").addEventListener("click", openMenu);

function openMenu(){

  let menuCategories = document.getElementById("dropdown-categories");

  menuCategories.classList.toggle("visible");
  
}
