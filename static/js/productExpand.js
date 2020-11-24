const expandButton = document.querySelector('.descriptionHeader').children[1].getElementsByTagName('a')[0]

const description = document.querySelector('.descriptionText')

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

mediaQuery.addEventListener("change", () => {
    if(mediaQuery.matches === false){
        description.style.display = "block"
        expandButton.getElementsByTagName('i')[0].className = "fas fa-angle-up"
    } else {
        description.style.display = "none"
        expandButton.getElementsByTagName('i')[0].className = "fas fa-angle-down"
    }
});
