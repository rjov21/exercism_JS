//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (words = "") => {
  let a = "";
  let z = 0;
  let r;
  let s = "";
  a = a + words[0];
  for (let i = 0; i < words.length; i++){
      while (r = 0) {
      if (words[i] == " " || words[i] == "-" || words[i] == "_"){
        i += 1;
        r = 1;  
        }else{
          r = 0
        }
      }
    a = a + words[i];   
  }
  return a.toUpperCase();
};
