let scrollBoton = document.querySelector(".arrow-icon"); //Variable que apunta al boton de subir al top
let modalBoton = document.getElementById("btn-open-modal");
let closeBoton = document.getElementById("close-button");
let modalCustom = document.getElementById("modal__custom");



//Funcion de subir al top con boton
addEventListener('scroll', () => {
    scrollBoton.classList.toggle('active', window.scrollY > 900);
});
scrollBoton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})


//prueba modal
/* modalBoton.addEventListener('click', (e) => {
    e.preventDefault();
    modalCustom.classList.add("show-modal");
})
closeBoton.addEventListener('click', (e) => {
    e.preventDefault();
    modalCustom.classList.remove("show-modal");
}) */