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

let logoutButton = document.getElementById("logOut");
logoutButton.addEventListener("click", () => {
  logout();
});

let campoCodigo = document.getElementById("campoCodigo")
let campoNombre = document.getElementById("campoNombre")
let campoCategoria = document.getElementById("campoCategoria")
let campoDescription = document.getElementById("campoDescription")
let campoSrcImage = document.getElementById("campoSrcImage")
let campoDestacada = document.getElementById("campoDestacada")
let campoReleased = document.getElementById("campoReleased")
let campoTrailerLink = document.getElementById("campoTrailerLink")

