let scrollBoton = document.querySelector(".arrow-icon"); //Variable que apunta al boton de subir al top
let enviarCv = document.getElementById("botoncitoPaProbrar");

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


//Boton envio de formulario
function submitForm(form) {
    Swal.fire({
        title: 'Tu currículum a sido enviado con éxito.',
        text: 'Nos pondremos en contacto a la brevedad.',
        imageUrl: '../assets/images/consulta-enviada-con-exito.gif',
        imageWidth: 200,
        imageHeight: 150,
        imageAlt: 'Consulta enviada',
        width: '45em',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
    })
        .then((isOk) => {
            if (isOk) {
                form.submit();
            }
        });
    return false
}


//Boton carga de CV
const cargarBtn = document.getElementById('cargarCv');

const fileChosen = document.getElementById('file-chosen');

cargarBtn.addEventListener('change', function(){
  fileChosen.textContent = "CV cargado con exito"
  fileChosen.style.color = "green";
})
