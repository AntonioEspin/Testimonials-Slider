let image = document.getElementsByClassName('container__image--photo');
let info = document.getElementsByClassName('container__info')

let prevIcon = document.getElementById('prev_icon')
let nextIcon = document.getElementById('next_icon')

prevIcon.addEventListener('click', anotherSlider)
nextIcon.addEventListener('click', anotherSlider)

function anotherSlider () {
    info[0].classList.toggle('sliderNone')
    info[1].classList.toggle('sliderNone')
    image[0].classList.toggle('sliderNone')
    image[1].classList.toggle('sliderNone')
}