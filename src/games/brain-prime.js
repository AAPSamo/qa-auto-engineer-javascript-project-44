/* Игра "Простое ли число?"
*/

import readlineSync from 'readline-sync';
import {
  isPrime, getRandomIntMinMax,
} from '../index.js';

let nameUser;
export const name = () => {
  console.log('Welcome to the Brain Games!');
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export const answer = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no". ');

  let i = 0;
  let countTrueAnswers = 0;

  for (i; i <= 2; i += 1) {
    const checkNumber = getRandomIntMinMax(1, 100);
    const primeOrNot = isPrime(checkNumber);

    console.log(`Question: ${checkNumber}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser === 'yes' && primeOrNot === true) {
      console.log('Correct!');
      countTrueAnswers += 1;
    } else if (answerUser === 'yes' && primeOrNot === false) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was "no".`);
      console.log(`Let's try again, ${nameUser}!`);
      i = 2;
      break;
    } else if (answerUser === 'no' && primeOrNot === false) {
      console.log('Correct!');
      countTrueAnswers += 1;
    } else if (answerUser === 'no' && primeOrNot === true) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was "yes".`);
      console.log(`Let's try again, ${nameUser}!`);
      i = 2;
      break;
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was "yes".`);
      console.log(`Let's try again, ${nameUser}!`);
      i = 2;
      break;
    }
  }

  if (countTrueAnswers === 3) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};
