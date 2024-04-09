import readlineSync from 'readline-sync';
import greeting from './cli.js';

export default function gameBody(description, taskFunction) {
  const userName = greeting();
  console.log(description);

  let marker = 0;

  for (let i = 1; i <= 3; i += 1) {
    const step = taskFunction();
    console.log(`Question: ${step[0]}`);
    const answer = readlineSync.question('Answer: ');

    if (answer === step[1]) {
      console.log('Correct!');
      marker += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${step[1]}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (marker === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}