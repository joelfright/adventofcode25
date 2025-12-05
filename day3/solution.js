import readInput from '../helper.js';

export function solution() {
  const input = readInput(3).split('\n');
  let biggestJoltage = 0;

  input.forEach(bank => {
    const batteryArr = bank.split('').map(Number);
    const largest = Math.max(...batteryArr.slice(0, batteryArr.length - 2));
    const secondLargest = Math.max(...batteryArr.slice(batteryArr.indexOf(largest) + 1, batteryArr.length));
    biggestJoltage = biggestJoltage + Number(String(largest).concat(String(secondLargest)));
  })

  return `Part 1: ${biggestJoltage}`;
}