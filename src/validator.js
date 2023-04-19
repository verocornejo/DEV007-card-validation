const validator = {
  isValid: function (creditCardNumber) {
    const creditCardArray = creditCardNumber.split("").reverse(); //metodo split transforma string en array y reverse invierte los elementos
    let total = 0; 
  
    for (let i = 0; i < creditCardArray.length; i++) {
      let currentValue = Number(creditCardArray[i]); //number es un objeto primitivo envolvente que permite representar y manipular valores numéricos 
  
      if (i % 2 !== 0) {
        currentValue *= 2; //si el indice es par, multiplicar por dos
  
        if (currentValue > 9) { //si el valor del indice es mayor que 9, sumar los digitos
          const digits = currentValue.toString().split(""); //pasar a string
          currentValue = Number(digits[0]) + Number(digits[1]); 
        }
      }
  
      total += currentValue;
    }
  
    return total % 10 === 0;
  },
  
  maskify: function (creditCardNumber) {
    const maskedNumber = creditCardNumber.slice(0, -4).replace(/./g, "#"); //metodo slice para tomar solo una parte del indice. /g es un modificador global (regular exp) se combina con replace 
    return maskedNumber + creditCardNumber.slice(-4); //-4 porque es de atras para adelante
  },
};
  
export default validator;
  
  

