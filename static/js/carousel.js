const carouselSlide = document.querySelectorAll('.carouselSlide')

const carouselIndicator = document.querySelector('.carouselIndicator').children;
const carouselForward = document.querySelector('.carouselForward')
const carouselBackward = document.querySelector('.carouselPrev')

let carouselIndex = 0
let carouselLength = (carouselSlide.length - 1)

carouselIndicator[0].style.background = "rgba(255,255,255,1)"

console.log(carouselIndicator)

carouselBackward.addEventListener('click', event => {
    carouselIndex--

    if(carouselIndex < 0){
        carouselIndex = carouselLength
    }

    carouselSlide[carouselIndex].style.display = "block"

    if(carouselIndex === carouselLength){
        carouselSlide[0].style.display = "none"
    } else {
        carouselSlide[carouselIndex + 1].style.display = "none"
    }
})


carouselForward.addEventListener('click', event => {
    carouselIndex++
    
    if (carouselIndex > carouselLength) {
        carouselIndex = 0
    }

    carouselSlide[carouselIndex].style.display = "block"

    if(carouselIndex === 0){
        carouselSlide[carouselLength].style.display = "none"
    } else {
        carouselSlide[carouselIndex - 1].style.display = "none"
    }
})
