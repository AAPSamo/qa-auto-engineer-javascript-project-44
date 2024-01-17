/* Игра "Простое ли число?"
*/

import {
  isPrime, getRandomIntMinMax,
} from '../index.js';

export const questionAboutResult = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

export const getQuestionAndAnswer = () => {
  let i = 0;
  let questionForUser;
  let answerMathematicItog = '';

  for (i; i <= 2; i += 1) {
    questionForUser = getRandomIntMinMax(1, 100);
    const primeOrNot = isPrime(questionForUser);

    if (primeOrNot === true) {
      answerMathematicItog = 'yes';
    } else answerMathematicItog = 'no';
  }
  return { questionForUser, answerMathematicItog };
};
