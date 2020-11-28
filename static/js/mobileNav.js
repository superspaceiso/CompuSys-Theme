const expandNav = document.querySelector('.expandBtn')
const mobileNav = document.querySelector('.mobileNavContent')

const subCategory = document.querySelectorAll('.subCategory')
const categoryHead = document.querySelectorAll('.categoryHead')

const subCategoryHead = document.querySelectorAll('.subCategoryHead')
const subCategoryChild = document.querySelectorAll('.subCategoryChild')

mobileNav.style.display = "none"

expandNav.addEventListener('click', () =>{

    if(mobileNav.style.display !== "none"){
        mobileNav.style.display = "none"
        expandNav.getElementsByTagName('i')[0].className = "fas fa-angle-down"
    } else {
        mobileNav.style.display = "block"
        expandNav.getElementsByTagName('i')[0].className = "fas fa-angle-up"
    }
})

for (let a = 0; a < subCategory.length; a++) {
    subCategory[a].style.display = "none"
}

for (let a = 0; a < categoryHead.length; a++) {

    categoryHead[a].addEventListener('click', () =>{
        if(subCategory[a].style.display !== "none"){
            subCategory[a].style.display = "none"
            categoryHead[a].children[1].getElementsByTagName('i')[0].className = "fas fa-angle-down"
        } else {
            subCategory[a].style.display = "block"
            categoryHead[a].children[1].getElementsByTagName('i')[0].className = "fas fa-angle-up"

        }
    })

}

for (let a = 0; a < subCategoryChild.length; a++) {
    subCategoryChild[a].style.display = "none"
}

for (let a = 0; a < subCategoryHead.length; a++) {

    subCategoryHead[a].addEventListener('click', () =>{
        if(subCategoryChild[a].style.display !== "none"){
            subCategoryChild[a].style.display = "none"
            subCategoryHead[a].children[1].getElementsByTagName('i')[0].className = "fas fa-angle-down"
        } else {
            subCategoryChild[a].style.display = "block"
            subCategoryHead[a].children[1].getElementsByTagName('i')[0].className = "fas fa-angle-up"
        }
    })

}


