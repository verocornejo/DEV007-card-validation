import validator from './validator.js';
//declarar variables y llamar desde html
const button = document.getElementById("validateBtn");
const creditCard = document.getElementById("inputCard");


button.addEventListener("click", function(event){ 
  event.preventDefault();//Evitar que se recargue la página
  if(creditCard.value === ""){
    alert("Por favor ingrese su número de tarjeta");
    return; //termina la función si el input está vacío
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
window.onlyNum = function onlyNum(event) {
  const key = event.key;
  if(!key.match (/\d|Backspace/))
    event.preventDefault();
};
//para que el input sea solo letras
window.onlyTxt = function onlyTxt(event) {
  const key = event.key;
  if(!key.match (/^[A-Za-z\s]*$/))
    event.preventDefault();
};










