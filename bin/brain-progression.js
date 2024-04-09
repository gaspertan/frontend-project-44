#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateProgression = (length) => {
  const start = Math.floor(Math.random() * 10);
  const diff = Math.floor(Math.random() * 5) + 1;
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + diff * i);
  }
  return progression;
};

const hideElement = (progression) => {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const question = progression.slice();
  const correctAnswer = question[hiddenIndex].toString();
  question[hiddenIndex] = '..';
  return { question, correctAnswer };
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  let correctAnswersCount = 0;
  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const progression = generateProgression(progressionLength);
    const { question, correctAnswer } = hideElement(progression);

    console.log(`Question: ${question.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playProgressionGame();