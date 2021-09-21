let scrollBoton = document.querySelector(".arrow-icon"); //Variable que apunta al boton de subir al top
let enviarCv = document.getElementById("botoncitoPaProbrar");
let agregarClase = document.querySelector(".modal-footer__trabaja-nosotros");
let eliminarBody = document.querySelector(".modal-body__trabaja-nosotros");
let inputName = document.getElementById("inputName");
let inputTel = document.getElementById("inputTel");

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



//probando el botoncito

const form = document.getElementById("formito");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarClase.style.display = 'flex';
    eliminarBody.style.display = 'none';
    form.submit(() => {
        setTimeout(() => {

        }, 10000);
        return true;
    });

})

/* enviarCv.addEventListener('submit', (e) => {
    e.preventDefault();
    agregarClase.style.display = 'flex';
    eliminarBody.style.display = 'none';
    setTimeout(function () {
        fetch("https://formsubmit.co/ajax/your@email.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: "FormSubmit",
                message: "I'm from Devro LABS"
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
        // window.location = "nosotros.html";
    }, 4000);
}) */