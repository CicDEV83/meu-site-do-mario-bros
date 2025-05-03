
const form = document.querySelector(".Formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    mascara.classList.add("active")
}

function esconderForm(){
    form.style.left = "-300%"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
    mascara.classList.remove("active")
}