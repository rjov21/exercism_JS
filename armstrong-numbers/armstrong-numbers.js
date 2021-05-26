//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  let respuesta = False;
  let number1 = str(number);
  let x = len(number1);
  let suma = 0;
    for (let i=0; i < number1.lenght; i++){
        let q = int(i);
        let w = Math.pow(q, x);
        suma = suma + w;
    if (suma == number){
        respuesta = True
    }
  }
    return respuesta;
};
