//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word = "street") => {
  let scorefinal = 0
    for (let i = 0; i < word.length; i++){
        if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u" || word.charAt(i) == "l" || word.charAt(i) == "n" || word.charAt(i) == "r" || word.charAt(i) == "t" || word.charAt(i) == "s"){
            scorefinal += 1;
        }
        if (word.charAt(i) == "d" || word.charAt(i) == "g"){
            scorefinal = 2 + scorefinal;
        }
        if (word.charAt(i) == "b" || word.charAt(i) == "c" || word.charAt(i) == "m" || word.charAt(i) == "p"){
            scorefinal = scorefinal + 3;
        }
        if (word.charAt(i) == "f" || word.charAt(i) == "v" || word.charAt(i) == "h" || word.charAt(i) == "w" || word.charAt(i) == "y"){
            scorefinal = scorefinal + 4;
        }
        if (word.charAt(i) == "k"){
            scorefinal = scorefinal + 5;
        }
        if (word.charAt(i) == "j" || word.charAt(i) == "x"){
            scorefinal = scorefinal + 8;
        }
        if (word.charAt(i) == "q" || word.charAt(i) == "z"){
            scorefinal = scorefinal + 10;
        }
        if (word.charAt(i) == "A" || word.charAt(i) == "E" || word.charAt(i) == "I" || word.charAt(i) == "O" || word.charAt(i) == "U" || word.charAt(i) == "L" || word.charAt(i) == "N" || word.charAt(i) == "R" || word.charAt(i) == "T" || word.charAt(i) == "S"){
            scorefinal = scorefinal + 1;
        }
        if (word.charAt(i) == "D" || word.charAt(i) == "G"){
            scorefinal = 2 + scorefinal;
        }
        if (word.charAt(i) == "B" || word.charAt(i) == "C" || word.charAt(i) == "M" || word.charAt(i) == "P"){
            scorefinal = scorefinal + 3;
        }
        if (word.charAt(i) == "F" || word.charAt(i) == "V" || word.charAt(i) == "H" || word.charAt(i) == "W" || word.charAt(i) == "Y"){
            scorefinal = scorefinal + 4;
        }
        if (word.charAt(i) == "K"){
            scorefinal = scorefinal + 5;
        }
        if (word.charAt(i) == "J" || word.charAt(i) == "X"){
            scorefinal = scorefinal + 8;
        }
        if (word.charAt(i) == "Q" || word.charAt(i) == "Z"){
            scorefinal = scorefinal + 10;
        }
    }
    return scorefinal;
};
