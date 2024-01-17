/* Игра "НОД"
Необходимо реализовать игру "наибольший общий делитель (НОД)".Суть игры в следующем:
пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и
ввести наибольший общий делитель этих чисел.
*/

import { getRandomInt, nod } from '../index.js';

export const questionAboutResult = 'Find the greatest common divisor of given numbers.';

export const getQuestionAndAnswer = () => {
  let i = 0;
  let questionForUser;
  let answerMathematicItog;

  for (i; i <= 2; i += 1) {
    const randomOne = getRandomInt() + 1;
    const randomTwo = getRandomInt() + 1;
    answerMathematicItog = Number(nod(randomOne, randomTwo));
    questionForUser = (`${randomOne} ${randomTwo}`);
  }

  return { questionForUser, answerMathematicItog };// +
};
