import readInput from '../helper.js';

export function solution() {
  const input = readInput(2).split(',');
  let sumOfInvalidIds1 = 0;
  let sumOfInvalidIds2 = 0;

  input.forEach(idRange => {
    const ids = idRange.split('-');
    for(let i = Number(ids[0]); i < Number(ids[1]); i++){
      if(String(i).match('^(\\d+)\\1$') !== null){
        sumOfInvalidIds1 = sumOfInvalidIds1 + i;
      }
      if(String(i).match('^(\\d+)\\1+$') !== null){
        sumOfInvalidIds2 = sumOfInvalidIds2 + i;
      }     
    }
  })

  return `Part 1: ${sumOfInvalidIds1} | Part 2: ${sumOfInvalidIds2}`;
}