/* Игра "НОД"
Необходимо реализовать игру "наибольший общий делитель (НОД)".Суть игры в следующем:
пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и
ввести наибольший общий делитель этих чисел.
*/

import readlineSync from 'readline-sync';
import { getRandomInt, nod } from './index.js';

let nameUser;
export const name = () => {
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export const answer = () => {
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  let countTrueAnswers = 0;

  for (i; i <= 2; i += 1) {
    const randomOne = getRandomInt() + 1;
    const randomTwo = getRandomInt() + 1;
    const nodItog = nod(randomOne, randomTwo);

    console.log(`Question: ${randomOne} ${randomTwo}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser == nodItog) {
      console.log('Correct!');
      countTrueAnswers += 1;
    } else if (answerUser !== nodItog) {
      console.log(`'${answerUser}'` + ' is wrong answer ;(. Correct answer was ' + `'${nodItog}'` + '.');
      console.log(`Let\'s try again, ${nameUser}!`);
      i = 2;
      break;
    } else { console.log('Error'); }
  }

  if (countTrueAnswers == 3) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};
