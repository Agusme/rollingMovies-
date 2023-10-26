


import { Pelicula } from "./clasePelicula.js";
import { campoRequerido, validarURL, validarNombre, validarGeneral } from "./helpers.js";

let logoutButton = document.getElementById("logOut");
let campoCodigo = document.getElementById("campoCodigo")
let campoNombre = document.getElementById("campoNombre")
let campoCategoria = document.getElementById("campoCategoria")
let campoDestacada = document.getElementById("campoDestacada")
let campoSrcImage = document.getElementById("campoSrcImage")
let campoDescription = document.getElementById("campoDescription")
let campoReleased = document.getElementById("campoReleased")
let campoTrailerLink = document.getElementById("campoTrailerLink")
let listaPeliculas = JSON.parse(localStorage.getItem("arrayPeliculas")) || [];


campoCodigo.addEventListener("blur", () => {
  campoRequerido(campoCodigo, 1, 4);
});
campoNombre.addEventListener("blur", ()=>{
  validarNombre(campoNombre)
})
campoCategoria.addEventListener("blur", ()=>{
  campoRequerido(campoCategoria, 1, 5)
})
campoDescription.addEventListener("blur", ()=>{
  campoRequerido(campoDescription, 1, 45)
})

campoSrcImage.addEventListener("blur", ()=>{
  validarURL(campoSrcImage)

})
campoDestacada.addEventListener("blur", ()=>{
  campoRequerido(campoDestacada, 1, 5)
})
campoReleased.addEventListener("blur", ()=>{
  campoRequerido(campoReleased, 1, 5)
})

campoTrailerLink.addEventListener("blur", ()=>{
  console.log("si")
  validarURL(campoTrailerLink)

})

function crearCodigoUnico() {
  let codigoUnico = Date.now().toString();
  return codigoUnico;
}
export const login = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  if (isAdmin === "true") {
    let adminLink = document.getElementById("adminLink");
    adminLink.className = "d-block";
    let logOut = document.getElementById("logOut");
    logOut.className = "d-block";
    let loginLink = document.getElementById("loginLink");
    loginLink.className = "d-none";
    let registerLink = document.getElementById("registerLink");
    registerLink.className = "d-none";
  }
};
export const logout = () => {
  localStorage.removeItem("isAdmin");

  location.replace("/pages/login.html");
};

document.addEventListener("DOMContentLoaded", () => {
  login();
});

logoutButton.addEventListener("click", () => {
  logout();
});


