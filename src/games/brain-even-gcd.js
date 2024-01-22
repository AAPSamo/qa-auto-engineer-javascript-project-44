import { getRandomInt } from '../utils.js';

export const questionAboutResult = 'Find the greatest common divisor of given numbers.';

const nod = (intA, intB) => {
  let randomOne = Number(intA);
  let randomTwo = Number(intB);

  while (randomOne !== 0 && randomTwo !== 0) {
    if (randomOne > randomTwo) { // если а больше б, то а присваиваем а/б
      randomOne %= randomTwo;
    } else {
      randomTwo %= randomOne;// наоборот
    }
  }
  return randomOne + randomTwo;
};

export const getQuestionAndAnswer = () => {
  // let answerMathematicItog;

  const randomOne = getRandomInt() + 1;
  const randomTwo = getRandomInt() + 1;
  const answerMathematicItog = Number(nod(randomOne, randomTwo));
  const questionForUser = (`${randomOne} ${randomTwo}`);

  return { questionForUser, answerMathematicItog };// +
};
