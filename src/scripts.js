// document = ir no HTML
// querySelector = busca o que eu quiser que ele busque


let video = document.querySelector(".meuvideo");
export function playvideo(){
    video.style.right = "50%"
}

export function fecharplayvideo(){
    video.style.left = "-150%"
}

let formulario = document.querySelector(".formulario")
export function aparecerFormulario(){
    formulario.style.left = "50%"
}

export function desaparecerFormulario(){
    formulario.style.left = "-50%"
}   

