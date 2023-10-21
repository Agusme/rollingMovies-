import { campoRequerido, validarMail, validarNombre } from "./helpers.js";

let nombre = document.getElementById("nombre")
let mail = document.getElementById("email")
let comentario = document.getElementById("comentario")

nombre.addEventListener("blur", ()=>{
validarNombre(nombre)
})
mail.addEventListener("blur", ()=>{
    validarMail(mail)
})
comentario.addEventListener("blur", ()=>{
    campoRequerido(comentario, 1, 160)
})

