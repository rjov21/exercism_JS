//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { indexOf } from "core-js/core/array";

export class HighScores {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }

  get scores() {
    let scores2=[];
    for (let index = 0; index < scores1.length; index++) {
        scores2[index] = scores1[index];
    }
    return scores2;
  }

  get latest() {
    let expected;
    expected = Number(typeof(scores1[scores1.length-1]));
    return expected;
  }

  get personalBest() {
    let expected;
    scores1.sort((a, b) => {
      if(a < b){
        return -1;
      }
      if(a > b){
        return 1;
      }
      return 0;
    });
    expected = Number(typeof(scores1[scores1.length-1]));
    return expected;
  }

  get personalTopThree() {
    let x = [];
    scores1.sort((a, b) => {
      if(a < b){
        return -1;
      }
      if(a > b){
        return 1;
      }
      return 0;
    });
    if(scores1.length <= 3){
      for (let index = 0; index < scores1.length; index++) {
        x[index] = scores1[index];
        }
    }else{
      for (let index = scores1.length - 3; index < scores1.length; index++) {
        x[index] = scores1[index];
        }
    }
    let mayor = [];
    let i = 0;
    for (let index = scores1.length; index >= 0; index--) {
      mayor[i] = x[index];
    }
    return mayor;
  }
}
