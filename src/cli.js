
import readlineSync from 'readline-sync'

export const myFunction = () => {

    const name = readlineSync.question('Your answer: ');
    
    console.log (`hello, ${name}!`);
  };
  