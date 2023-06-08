const toej = document.getElementsByClassName("sort-toej");
const accessories = document.getElementsByClassName("sort-accessories");
const bolignips = document.getElementsByClassName("sort-bolignips");
const garnrester = document.getElementsByClassName("sort-garnrester");
const sortingText = document.getElementsByClassName("sorting-text");

function styleSortingText(element) {
    for (let i = 0; i < sortingText.length; i++) {
        if(sortingText[i] === element){
            element.classList.add("sort-styling-text")
        } else { 
            sortingText[i].classList.remove("sort-styling-text")
        }
    }
}

function sortCategories(category, element){
    styleSortingText(element)

    for (let i = 0; i < toej.length; i++) {
        if(!toej[i].classList.contains(category)){
            toej[i].classList.add("hide-opskrift")
        } else {
            toej[i].classList.remove("hide-opskrift")
        }
    }

    for (let i = 0; i < accessories.length; i++) {
        if(!accessories[i].classList.contains(category)){
            accessories[i].classList.add("hide-opskrift")
        } else {
            accessories[i].classList.remove("hide-opskrift")
        }
    }

    for (let i = 0; i < bolignips.length; i++) {
        if(!bolignips[i].classList.contains(category)){
            bolignips[i].classList.add("hide-opskrift")
        } else {
            bolignips[i].classList.remove("hide-opskrift")
        }
    }

    for (let i = 0; i < garnrester.length; i++) {
        if(!garnrester[i].classList.contains(category)){
            garnrester[i].classList.add("hide-opskrift")
        } else {
            garnrester[i].classList.remove("hide-opskrift")
        }
    }
}

function sortAll(element){
    styleSortingText(element)

    for (let i = 0; i < toej.length; i++) {
        toej[i].classList.remove("hide-opskrift")
    }

    for (let i = 0; i < accessories.length; i++) {
        accessories[i].classList.remove("hide-opskrift")
    }

    for (let i = 0; i < bolignips.length; i++) {
        bolignips[i].classList.remove("hide-opskrift")
    }

    for (let i = 0; i < garnrester.length; i++) {
        garnrester[i].classList.remove("hide-opskrift")
    }
}
