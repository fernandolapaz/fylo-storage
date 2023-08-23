const bar = document.querySelector('.storage__bar-used')
const remaining = document.getElementById('remaining')
const used = document.getElementById('used')

let width = 0.5
let id = setInterval(move, 25)
function move() {
    if (width >= 81.5) {
        clearInterval(id)
    } else {
        width++;
        bar.style.width = width + "%"
        remaining.innerHTML = 1000 - width * 10
        used.innerHTML = 0 + width * 10 + ' GB'
    }
}

// ATTRIBUTION
const arrow = document.querySelector('.attr__btn')
const panel = document.querySelector('.attribution')

arrow.addEventListener('click', function () {
    panel.classList.toggle('show')

    if (panel.classList.contains('show')) {
        this.setAttribute('aria-expanded', 'true')
        this.removeAttribute('title')
        this.style.animation = 'none'
    } else {
        this.setAttribute('aria-expanded', 'false')
    }
})

// Click outside
document.addEventListener('click', function (e) {
    if (!arrow.contains(e.target)) {
        if (panel.classList.contains('show')) {
            panel.classList.remove('show')
            arrow.setAttribute('aria-expanded', 'false')
            arrow.setAttribute('title', 'Show attribution information')
        }
    }
})