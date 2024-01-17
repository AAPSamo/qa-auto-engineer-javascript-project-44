import readlineSync from 'readline-sync';

export default function nameUserWelcomeFunction() {
  const userWelcom = 'Welcome to the Brain Games!';
  console.log(`${userWelcom}`);

  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  return nameUser;
}
