import { login, logout } from "./admin.js";
document.addEventListener("DOMContentLoaded", ()=>{
    login()
  });
  
  
  const logoutButton = document.getElementById("logOut"); 
  logoutButton.addEventListener("click", ()=>{
    logout()
  });