export const campoRequerido = (input, min, max) => {
    if (
      input.value.trim().length > 0 &&
      input.value.length <= max &&
      input.value.length >= min
    ) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  };
   
  
  
  export const validarMail = (input) => {
    const validacion = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (validacion.test(input.value) && input.value.trim().length > 0) {
      input.className = "form-control is-valid";
  
      return true;
    } else {
      input.className = "form-control is-invalid";
  
      return false;
    }
  };
  
 export const validarNombre =(input)=>{
const nombreValidado = /^[A-Za-z\s\-']+$/
if (nombreValidado.test(input.value)&& input.value.trim(). length> 0){
  input.className =" form-control is-valid"
  return true;
} else{
  input.className = "form-control is-invalid";
  
  return false;
}

  }
  
  
  export const validarURL = (input) => {
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  
    if (patron.test(input.value)) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  };