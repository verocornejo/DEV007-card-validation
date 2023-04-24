const validator = {
  isValid: function (creditCardNumber) { //funcion que recibe como parametro un numero de tarjeta
    const creditCardArray = creditCardNumber.split("").reverse(); // convertir el numero (string) en un array al usar metodo split transforma string en array y reverse invierte los elementos
    console.log(creditCardArray);
    let total = 0; 
    
    for (let i = 0; i < creditCardArray.length; i++) {
      let currentValue = Number(creditCardArray[i]); //number es un objeto primitivo envolvente que permite representar y manipular valores numéricos 
      console.log(currentValue);
      if (i % 2 !== 0) {
        currentValue *= 2; //si el indice es par, multiplicar por dos
  
        if (currentValue > 9) { //si el valor del indice es mayor que 9, sumar los digitos
          const digits = currentValue.toString().split(""); //pasar a array
          currentValue = Number(digits[0]) + Number(digits[1]); 
        }
      }
      
      total += currentValue;
    }
  
    return total % 10 === 0;
  },

  
  maskify: function (creditCardNumber) {
    const maskedNumber = creditCardNumber.slice(0, -4).replace(/./g, "#"); //metodo slice para tomar solo una parte del indice del 0 al -4. /g es un modificador global (regular exp) se combina con replace para poner las X 
    return maskedNumber + creditCardNumber.slice(-4); //-4 porque es de atras para adelante para concatenar los ultimos 4 numeros sin mascara
  }, 
};

export default validator;
  
  

