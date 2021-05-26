//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (text= "ramen") => {
  let a= "";
  for (let index = text.length-1; index >= 0; index--) {
    a += text.charAt(index);
  }
  return a;
};
