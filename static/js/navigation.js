const menuItem = document.querySelectorAll('.menu-item-has-children')
const submenuItem = document.querySelectorAll('.subMenu')

let navCategories = []
let subCategories = []

for(let a = 0; a < menuItem.length; a++) {
    navCategories.push(menuItem[a].innerText)
}

for(let b = 0; b < submenuItem.length; b++){
    subCategories.push(submenuItem[b].classList[1])
}

for(let c = 0; c < navCategories.length; c++){

    if(navCategories[c] === subCategories[c] ) {
        menuItem[c].addEventListener('mouseover', () => {
            if(submenuItem[c].style.display !== "block")
            {
                submenuItem[c].style.display = "block"
            } else {
                submenuItem[c].removeAttribute("style")
            }
        })
    }

    submenuItem[c].addEventListener('mouseleave', () => {
        submenuItem[c].removeAttribute("style")
    })

}
