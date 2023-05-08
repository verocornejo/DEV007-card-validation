import validator from './validator.js';
//declarar variables y llamar desde html para crear el evento donde 
const button = document.getElementById("validateBtn");
const creditCard = document.getElementById("inputCard");

button.addEventListener("click", function(event){ 
  event.preventDefault();//Evitar que se recargue la página
  if(creditCard.value === ""){
    alert("Por favor ingrese su número de tarjeta");
    return; //termina la función si el input está vacío
  }
  if(creditCard.value.length < 16){
    alert("El número de tarjeta debe tener al menos 16 caracteres");
    return;
  }

  
  const creditCardNumber = creditCard.value;
  const isValid = validator.isValid(creditCardNumber);
  const mask = validator.maskify(creditCardNumber);

  if(isValid === true){
    alert("La tarjeta  "+ mask +" es válida");
  }
  else{
    alert("La tarjeta  "+ mask+" no es válida");
  }
}); 
//para que el input sean solo numeros
window.onlyNum = function onlyNum(event) { //El objeto window representa la ventana que contiene un documento DOM
  const key = event.key;
  if(!key.match (/\d|Backspace/)) //El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena
    event.preventDefault();
};
//para que el input sea solo letras
window.onlyTxt = function onlyTxt(event) {
  const key = event.key;
  if(!key.match (/^[A-Za-z\s]*$/))
    event.preventDefault();
};










