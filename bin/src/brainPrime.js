#!/usr/bin/env node
import gameBody from './index.js';

function isPrimeNumber(num) {
  if (num === 1) {
    return false;
  }
  let i = 2;
  while (i < num) {
    if (num % i === 0 && num !== i) {
      return false;
    }
    i += 1;
  }
  return true;
}

function task() {
  const num = Math.ceil(Math.random() * 1000);

  const correct = isPrimeNumber(num) ? 'yes' : 'no';

  return [num, correct];
}

export default function brainPrime() {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameBody(description, task);
}