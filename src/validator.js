const validator = {
  isValid: function (creditCardNumber) { //funcion  recibe como parametro el numero de tarjeta
    const creditCardArray = creditCardNumber.split("").reverse(); // convertir el numero en un array al usar metodo split(transforma string en array) y reverse invierte los elementos
    //console.log(creditCardArray);
    let total = 0; 
    
    for (let i = 0; i < creditCardArray.length; i++) {
      let currentValue = Number(creditCardArray[i]); //convierte el valor de i de creditCardArray en un tipo de dato Number y lo asigna a la variable currentValue (number es un objeto primitivo permite representar y manipular valores numéricos 
      //console.log(currentValue);
      if (i % 2 !== 0) { //la posición que originalmente era par ahora es impar en el array invertido, por eso es impar
        currentValue *= 2; //si el indice es impar, multiplicar por dos
  
        if (currentValue > 9) { //si el valor del indice es mayor que 9, sumar los digitos
          const digits = currentValue.toString().split(""); //pasar a array
          currentValue = Number(digits[0]) + Number(digits[1]); //convierte los elementos en la posición 0 y 1 del array "digits" en numeros para luego sumarlos y asignar el resultado a la variable currentValue
          
        }
      }
      
      total += currentValue; //el valor actual currentValue, se agrega al valor total  y se almacena el resultado en total (es una varibale que acumula los valores de cada digito)
      
    }
  
    return total % 10 === 0; //si el total residuo de 10 es 0 entonces ta weno
    
  },

  
  maskify: function (creditCardNumber) {
    const maskedNumber = creditCardNumber.slice(0, -4).replace(/./g, "#"); //metodo slice para tomar solo una parte del indice del 0 al -4. /g es un modificador global (regular exp)Se devuelven las subcoincidencias de cada coincidencia en la cadena. Si esta opción no se especifica, sólo se devolverán las subcoincidencias del primer emparejamiento. se combina con replace para poner las X 
    //console.log(maskedNumber);
    return maskedNumber + creditCardNumber.slice(-4); //-4 porque es de atras para adelante para concatenar los ultimos 4 numeros sin mascara
  }, 
};

export default validator;
  
  

