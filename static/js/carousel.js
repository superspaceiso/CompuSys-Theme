const carouselSlide = document.querySelectorAll('.carouselSlide')

const carouselIndicator = document.querySelector('.carouselIndicator').children;
const carouselForward = document.querySelector('.carouselForward')
const carouselBackward = document.querySelector('.carouselPrev')

let carouselIndex = 0
let carouselLength = (carouselSlide.length - 1)

carouselIndicator[carouselIndex].style.background = "rgba(255,255,255,1)"

carouselBackward.addEventListener('click', () => {
    carouselIndex--

    if(carouselIndex < 0){
        carouselIndex = carouselLength
    }

    carouselIndicator[carouselIndex].style.background = "rgba(255,255,255,1)"
    carouselSlide[carouselIndex].style.display = "block"

    if(carouselIndex === carouselLength){
        carouselSlide[0].style.display = "none"
        carouselIndicator[0].removeAttribute("style")
    } else {
        carouselSlide[carouselIndex + 1].style.display = "none"
        carouselIndicator[carouselIndex + 1].removeAttribute("style")
    }
})

carouselForward.addEventListener('click', () => {
    carouselIndex++
    
    if (carouselIndex > carouselLength) {
        carouselIndex = 0
    }

    carouselIndicator[carouselIndex].style.background = "rgba(255,255,255,1)"
    carouselSlide[carouselIndex].style.display = "block"

    if(carouselIndex === 0){
        carouselSlide[carouselLength].style.display = "none"
        carouselIndicator[carouselLength].removeAttribute("style")
    } else {
        carouselSlide[carouselIndex - 1].style.display = "none"
        carouselIndicator[carouselIndex - 1].removeAttribute("style")
    }
})
