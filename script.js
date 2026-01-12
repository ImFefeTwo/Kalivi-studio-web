const nav = document.querySelector('#nav');
const abrir = document.querySelector('#open');
const cerrar = document.querySelector('#close');
 
abrir.addEventListener('click', () => {
    nav.classList.add('nav-visible');
    document.body.classList.add('menu-abierto')
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('nav-visible');
    document.body.classList.remove('menu-abierto');
})
