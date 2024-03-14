#!/usr/bin/env node
import readlineSync from 'readline-sync';
function generateProgression() {
    const ProgressionLength = Math.floor(Math.random() * 6) + 5;
    const startNum = Math.floor(Math.random() * 50);
    const diff = Math.floor(Math.random() * 10) + 1;
    const hiddenIndex = Math.floor(Math.random() * ProgressionLength);
    const progression = [];
    let index = startNum;

    for (let i = 0; i < ProgressionLength; i++) {
        if (i === hiddenIndex) {
            progression.push('..');
        } else {
            progression.push(index);
            index += diff;
        }
    }

    return { progression: progression, answer: startNum + diff * hiddenIndex };
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

let correctAnswersCount = 0;
while (correctAnswersCount < 3) {
    const { progression, answer } = generateProgression();
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer) === answer) {
        console.log('Correct!');
        correctAnswersCount += 1;
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${answer}'.`);
        console.log(`Let's try again, ${name}!`);
        correctAnswersCount = 0;
        break;
    }
}

console.log(`Congratulations, ${name}!`);