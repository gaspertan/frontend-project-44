#!/usr/bin/env node
import readlineSync from 'readline-sync';

function generateRandomExpression() {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const expression = `${num1} ${operator} ${num2}`;
  return { expression, answer: eval(expression) };
}

function runGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('What is the result of the expression?');

  let isCorrect = true;
  for (let i = 0; i < 3; i++) {
    const { expression, answer } = generateRandomExpression();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (parseInt(userAnswer, 10) !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      isCorrect = false;
      break;
    }
    console.log('Correct!');
  }

  if (isCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
}
runGame();
