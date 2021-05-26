//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (multiples = [], limit) => {
    let suma = 0
    for (let j=0; j < multiples.length; j++){
        for (let i=1; i <= limit; i++){
            if (i % multiples[j] == 0){
                suma = suma + i
        }
    return suma;
    }
  }
};
