function openMenu() {
  // Fjerner eller tilføjer en class, ved at toggle
  var links = document.getElementById("navigation")
  var hamburger = document.getElementsByClassName("ham")[0]
  links.classList.toggle("show-links")
  hamburger.classList.toggle("active")

  if(links.classList.contains("show-links")){
    links.classList.add("hide-links")
  }
}

function removeMenu(){
  var links = document.getElementById("navigation")
  var hamburger = document.getElementsByClassName("ham")[0]
  links.classList.remove("show-links")
  hamburger.classList.remove("active")
}

window.onclick = ((e) => {
  let menu = document.getElementsByClassName("navigation-menu")[0]
  if(!menu.contains(e.target) && !e.target.classList.contains("ham")){
    removeMenu()
  }
})

// Dropdown submenu 
function openDropdown(iconId, dropdownId) {
  var iconElement = document.getElementById(iconId)
  var dropdownElement = document.getElementById(dropdownId)
  var span1 = iconElement.children[1]
  var span2 = iconElement.children[2]
  var allShowingElements = document.getElementsByClassName("show-element")

  console.log(allShowingElements)

  for (let i = 0; i < allShowingElements.length; i++) {
    
    let dropdown = allShowingElements[i];
    if(dropdown.id === dropdownId){
      continue
    }

    let iconSide1 = dropdown.previousElementSibling.children[1].children[1]
    let iconSide2 = dropdown.previousElementSibling.children[1].children[2]
    
    dropdown.classList.replace("show-element", "hide-element")
    iconSide1.classList.replace("arrow-side-2","arrow-side-1")
    iconSide2.classList.replace("arrow-side-1","arrow-side-2")

  }

  dropdownElement.classList.toggle("hide-element")
  dropdownElement.classList.toggle("show-element")

  span1.classList.toggle("arrow-side-1")
  span2.classList.toggle("arrow-side-2")

  span1.classList.toggle("arrow-side-2")
  span2.classList.toggle("arrow-side-1")
}



// When the user scrolls the page, execute handleScrollBar
window.onscroll = function() {handleScrollBar()};

function handleScrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}


// Til "inde på en opskrift side"

function lineThroughParagraph(paragraphId){
  var pElement = document.getElementById(paragraphId)

  pElement.classList.toggle("p-line-through")
}