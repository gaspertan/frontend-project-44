import readlineSync from 'readline-sync';

function myFunction() {
  const name = readlineSync.question('Your answer: ');

  console.log(`hello, ${name}!`);
}
export { myFunction };
