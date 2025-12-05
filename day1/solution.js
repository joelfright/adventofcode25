import readInput from '../helper.js';

export function solution() {
  const input = readInput(1).split('\r\n');
  let dialLocation = 50;
  let password1 = 0;

  input.forEach(instruction => {
    const moveBy = Number(instruction.substring(1,4));
    if(instruction.substring(0,1) == 'L'){
      if((dialLocation - moveBy) > 99 || (dialLocation - moveBy) < 0){
        dialLocation = ((dialLocation - moveBy) % 100 + 100) % 100;
      } else {
        dialLocation = dialLocation - moveBy;
      }
    } else {
      if((dialLocation + moveBy) > 99 || (dialLocation + moveBy) < 0) {
        dialLocation = ((dialLocation + moveBy) % 100 + 100) % 100;
      } else {
        dialLocation = dialLocation + moveBy;
      }
    }
    
    if(dialLocation === 0){
      password1++;
    }
  })

  return `Part 1: ${password1}`;
}