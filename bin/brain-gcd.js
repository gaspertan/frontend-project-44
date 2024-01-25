#!/usr/bin/env node
import readlineSync from 'readline-sync';

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function playGcdGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i++) {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = gcd(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playGcdGame();
