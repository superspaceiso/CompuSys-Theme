const productButton = document.querySelector('.expandProducts')
const articleButton = document.querySelector('.expandArticles')
const mediaQueryHome = window.matchMedia('(max-width: 601px)')

const articles = document.querySelector('.latestPosts')
const products = document.querySelector('.latestProducts')

function expandProducts() {

    if(products.style.display !== "none"){
        products.style.display = "none"
        productButton.getElementsByTagName('i')[0].className = "fas fa-angle-down"
    } else {
        products.style.display = "grid"
        productButton.getElementsByTagName('i')[0].className = "fas fa-angle-up"
    }
}

function expandArticles() {

    if(articles.style.display !== "none"){
        articles.style.display = "none"
        articleButton.getElementsByTagName('i')[0].className = "fas fa-angle-down"
    } else {
        articles.style.display = "grid"
        articleButton.getElementsByTagName('i')[0].className = "fas fa-angle-up"
    }
}

productButton.addEventListener("click", expandProducts)
articleButton.addEventListener("click", expandArticles)

mediaQueryHome.addEventListener("change", () => {
    if(mediaQueryHome.matches === false){
        products.style.display = "grid"
        articles.style.display = "grid"
    } else {
        products.style.display = "none"
        productButton.getElementsByTagName('i')[0].className = "fas fa-angle-down"
        articles.style.display = "none"
        articleButton.getElementsByTagName('i')[0].className = "fas fa-angle-down"
    }
});

