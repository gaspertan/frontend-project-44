#!/usr/bin/env node

import readlineSync from 'readline-sync';

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function playPrimeGame() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    while (true) {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const correctAnswer = isPrime(number) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            break;
        }
    }
}

playPrimeGame();