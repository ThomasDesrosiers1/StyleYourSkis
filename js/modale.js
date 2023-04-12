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

//======== Fonction de recherche designs

const search = () =>{
  const searchbox =  document.getElementById("search-design").value.toUpperCase();
  const storeDesigns = document.getElementById("container-design");
  const design = document.querySelectorAll(".product-design");
  const designName = storeDesigns.getElementsByTagName("a");

  for(var i=0; i < designName.length; i++)
  {
    let match = design[i].getElementsByTagName("a")[0];

    if (match) {
      const textValue = match.textContent || match.innerHTML;
      const regExp = new RegExp(searchbox, "gi");
      const newTextValue = textValue.replace(regExp, (match) => {
        return "<b>" + match + "</b>";
      });

      if (textValue.toUpperCase().indexOf(searchbox) > -1) {
        match.innerHTML = newTextValue;
        design[i].style.display = "";
      } else {
        match.innerHTML = textValue;
        design[i].style.display = "none";
      }
    }
  }

}