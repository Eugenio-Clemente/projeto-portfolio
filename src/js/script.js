let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = scrollBy;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[herf*=' + id + ']').classList.add('active')
            })
        }
    })

    let header = document.querySelector('header')
    header.classList.toggle('stickey', scrollY > 100)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
}

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
})
ScrollReveal().reveal('.home-img, .habilidades-container, .portfolio-box ', {
    origin: 'bottom'
})
ScrollReveal().reveal('.home-content h1, .sobre-img', {
    origin: 'left'
})
ScrollReveal().reveal('.home-content p, .sobre-content', {
    origin: 'right'
})

const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Frontend', 'Digitador'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
})