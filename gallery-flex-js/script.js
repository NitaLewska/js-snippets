let slide = document.querySelectorAll('.slide')

function setActive() {
    slide.forEach(s => s.classList.remove('active'))
    this.classList.add('active')
}

slide.forEach(s => s.addEventListener('click', setActive))