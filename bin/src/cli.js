import readlineSync from 'readline-sync';

function myFunction() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`hello, ${name}!`);
}
export { myFunction };
