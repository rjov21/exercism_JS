//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (hey_bob = "") => {
  answer = "";
    if (hey_bob[len(hey_bob) - 1] == "?"){
        answer = "sure.";
    }
    if (hey_bob == hey_bob.toUpperCase()){
        answer = "Whoa, chill out!";
    }
    if (hey_bob[0] == "¿" && hey_bob[len(hey_bob) - 1] == "?"){
        answer = "Calm down, I know what I'm doing!";
    }
    if (hey_bob == ""){
        answer = "Fine. Be that way!";
  }
    else{
        answer = "Whatever.";
    }
    return answer;
  
};
