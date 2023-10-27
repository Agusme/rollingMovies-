 
 
 import { campoRequerido, validarNombre, validarURL } from "./helpers.js";

 
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
  let campoCodigo = document.getElementById("campoCodigo");
  let campoNombre = document.getElementById("campoNombre");
  let campoCategoria = document.getElementById("campoCategoria");
  let campoDescription = document.getElementById("campoDescription");
  let campoSrcImage = document.getElementById("campoSrcImage");
  let campoDestacada = document.getElementById("campoDestacada");
  let campoReleased = document.getElementById("campoReleased");
  let campoTrailerLink = document.getElementById("campoTrailerLink");
  let formPeliculas = document.getElementById("formPeliculas");

  campoCodigo.addEventListener("blur", () => {
    campoRequerido(campoCodigo, 1, 5);
  });

  campoNombre.addEventListener("blur", () => {
    validarNombre(campoNombre);
  });
  
  campoCategoria.addEventListener("blur", () => {
    campoRequerido(campoCategoria, 1, 14);
  });
  campoDescription.addEventListener("blur", () => {
    campoRequerido(campoDescription, 1, 45);
  });
  campoSrcImage.addEventListener("blur", () => {
    validarURL(campoSrcImage);
  });
  campoDestacada.addEventListener("blur", () => {
    campoRequerido(campoDestacada, 1, 14);
  });
  campoReleased.addEventListener("blur", () => {
    campoRequerido(campoReleased, 1, 14);
  });
  campoTrailerLink.addEventListener("blur", () => {
    validarURL(campoTrailerLink);
  });
});
