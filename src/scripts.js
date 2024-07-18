// document = ir no HTML
// querySelector = busca o que eu quiser que ele busque

let formulario = document.querySelector(".formulario")

export function aparecerFormulario(){
    formulario.style.left = "50%"
}

export function desaparecerFormulario(){
    formulario.style.left = "-50%"
}