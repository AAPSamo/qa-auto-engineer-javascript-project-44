import readlineSync from 'readline-sync';

export const name = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

// console.log('Hello, ');
