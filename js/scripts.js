
//======= MENU-DROPDOWN =======//

const boutonCategories = document.querySelector(".dropdown-arrow1");
const boutonCouleurs = document.querySelector(".dropdown-arrow2");

boutonCategories.addEventListener("click", openMenuCategories);
boutonCouleurs.addEventListener("click", openMenuCouleurs);

function openMenuCategories(){

  let menuCategories = document.getElementById("dropdown-categories");
  menuCategories.classList.toggle("visible");
  boutonCategories.classList.toggle("rotate");
   
}

function openMenuCouleurs(){

  let menuCouleurs = document.getElementById("dropdown-couleurs");
  menuCouleurs.classList.toggle("visible");
  boutonCouleurs.classList.toggle("rotate");
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


//======== SECTION SERVICES ========//

//========Inspection

const inspectionBouton = document.querySelector('.info-inspection');
const inspectionTexte = document.querySelector('.inspection-text');

inspectionBouton.addEventListener("mouseover", ouvreInspection);
inspectionBouton.addEventListener("mouseout", fermeInspection);

function ouvreInspection(){
  
  inspectionTexte.classList.add('active');

}

function fermeInspection(){
  
  inspectionTexte.classList.remove("active");
  
}

//========Fixations

const fixationsBouton = document.querySelector('.info-fixations');
const fixationsTexte = document.querySelector('.fixations-text');

fixationsBouton.addEventListener("mouseover", ouvreFixations);
fixationsBouton.addEventListener("mouseout", fermeFixations);

function ouvreFixations(){
  
  fixationsTexte.classList.add('active');

}

function fermeFixations(){
  
  fixationsTexte.classList.remove("active");
  
}

//========Maintenance

const maintenanceBouton = document.querySelector('.info-maintenance');
const maintenanceTexte = document.querySelector('.maintenance-text');

maintenanceBouton.addEventListener("mouseover", ouvreMaintenance);
maintenanceBouton.addEventListener("mouseout", fermeMaintenance);

function ouvreMaintenance(){
  
  maintenanceTexte.classList.add('active');

}

function fermeMaintenance(){
  
  maintenanceTexte.classList.remove("active");
  
}

//========Réparation

const reparationBouton = document.querySelector('.info-reparation');
const reparationTexte = document.querySelector('.reparation-text');

reparationBouton.addEventListener("mouseover", ouvreReparation);
reparationBouton.addEventListener("mouseout", fermeReparation);

function ouvreReparation(){
  
  reparationTexte.classList.add('active');

}

function fermeReparation(){
  
  reparationTexte.classList.remove("active");
  
}


//========== SECTION CONTACT ============//








