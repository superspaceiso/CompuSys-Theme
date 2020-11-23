const productImage = document.querySelector('.productImage').getElementsByTagName('img')[0].src
const imageSelector = document.querySelector('.imageSelector').children

let images = [];

for(let i=0;i< imageSelector.length; i++) {
    images.push(imageSelector[i].getElementsByTagName('img')[0].src)

    imageSelector[i].addEventListener('click', event => {
        document.querySelector('.productImage').getElementsByTagName('img')[0].src = images[i]
    })
}

const previous = document.querySelector('.prev')
const forward = document.querySelector('.forward')

let index = 0

previous.addEventListener('click', event => {

    index--

    if(index < 0){
        index = 3
    }

    document.querySelector('.productImage').getElementsByTagName('img')[0].src = images[index]
})

forward.addEventListener('click', event => {

    index++

    if (index >= 3) {
        index = 0
    }

    document.querySelector('.productImage').getElementsByTagName('img')[0].src = images[index]
})