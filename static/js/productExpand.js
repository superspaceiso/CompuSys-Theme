const expandButton = document.querySelector('.descriptionHeader').children[1].getElementsByTagName('a')[0]
const description = document.querySelector('.descriptionText')
const mediaQueryProduct = window.matchMedia('(max-width: 601px)')

function expandDescription() {

    if(description.style.display !== "none"){
        description.style.display = "none"
        expandButton.getElementsByTagName('i')[0].className = "fas fa-angle-down"
    } else {
        description.style.display = "block"
        expandButton.getElementsByTagName('i')[0].className = "fas fa-angle-up"
    }

}

expandButton.addEventListener("click", expandDescription)

mediaQueryProduct.addEventListener("change", () => {
    if(mediaQueryProduct.matches === false){
        description.style.display = "block"
        expandButton.getElementsByTagName('i')[0].className = "fas fa-angle-up"
    } else {
        description.style.display = "none"
        expandButton.getElementsByTagName('i')[0].className = "fas fa-angle-down"
    }
});
