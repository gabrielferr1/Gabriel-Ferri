
const darkMode = document.getElementById('icon')
const themeSystem = localStorage.getItem('themeSystem') || 'light'

darkMode.addEventListener('click', () => {
    let oldTheme = localStorage.getItem('themeSystem') || 'light'
    let newTheme = oldTheme == 'light' ? 'dark' : 'light'

    localStorage.setItem('themeSystem',newTheme)
    defineCurrentTheme(newTheme)
}) 

function defineCurrentTheme(theme){
    document.documentElement.setAttribute('data-theme', theme)

    if (theme === 'light') {
        darkMode.src = 'images/icons8-verão-48.png'
        document.getElementById('logo').src = "images/LogoDesenho_gf.png"
        document.getElementById('home').style.backgroundImage = "url('images/repeating-triangles.png')"
        document.getElementById('contato').style.backgroundImage = "url('images/repeating-triangles.png')"
    } else {
        darkMode.src = 'images/icons8-símbolo-da-lua-30 (1).png'
        document.getElementById('logo').src = "images/LogoDesenho_gfwhite.png"
        document.getElementById('home').style.backgroundImage = "url('images/repeating-triangles1.png')"
        document.getElementById('contato').style.backgroundImage = "url('images/repeating-triangles1.png')"
    }

}
defineCurrentTheme(themeSystem)



function toggleMenu() {
    const menu = document.getElementById('menu-mobile');
    const overlay = document.querySelector('.background-overlay');

    menu.classList.toggle('abrir'); 
    overlay.style.display = menu.classList.contains('abrir') ? 'block' : 'none'; 
}

function closeMenu() {
    const menu = document.getElementById('menu-mobile');
    const overlay = document.querySelector('.background-overlay');

    menu.classList.remove('abrir'); 
    overlay.style.display = 'none'; 
}



document.addEventListener('DOMContentLoaded', function() {
    const meuHeader = document.getElementById('menu');

    window.addEventListener('scroll', function() {

        if (window.scrollY > 50) {
            meuHeader.classList.add('background-color');
        } else {
            meuHeader.classList.remove('background-color');
        }
    });
});

window.revelar = ScrollReveal({reset: true})
revelar.reveal('.home-apresentacao', {
    duration: 1000,
    distance: '90px'
})
window.revelar = ScrollReveal({reset: true})
revelar.reveal('#home-img', {
    duration: 1000,
    distance: '90px',
    delay: 250
})

window.revelar = ScrollReveal({reset: true})
revelar.reveal('#home-img-mobile', {
    duration: 1000,
    distance: '90px',
    delay: 500
})

window.revelar = ScrollReveal({reset: true})
revelar.reveal('.sobremim-apresentacao', {
    duration: 1000,
    distance: '90px'
})
window.revelar = ScrollReveal({reset: true})
revelar.reveal('.sobremim-skills', {
    duration: 1000,
    distance: '90px',
    delay: 500
})

window.revelar = ScrollReveal({reset: true})
revelar.reveal('.projeto-criptografador', {
    duration: 1000,
    distance: '90px'
})
window.revelar = ScrollReveal({reset: true})
revelar.reveal('.projeto-numero-secreto', {
    duration: 1000,
    distance: '90px',
    delay: 500
})

window.revelar = ScrollReveal({reset: true})
revelar.reveal('.formcontato-container', {
    duration: 1000,
    distance: '90px'
})