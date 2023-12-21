import readlineSync from 'readline-sync';

export default function nameUserFunction() {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
}
