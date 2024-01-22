import getRandomIntMinMax from '../utils.js';

export const questionAboutResult = 'Find the greatest common divisor of given numbers.';

const nod = (intA, intB) => {
  let randomOne = Number(intA);
  let randomTwo = Number(intB);

  while (randomOne !== 0 && randomTwo !== 0) {
    if (randomOne > randomTwo) {
      randomOne %= randomTwo;
    } else {
      randomTwo %= randomOne;
    }
  }
  return randomOne + randomTwo;
};

export const getQuestionAndAnswer = () => {
  const randomOne = getRandomIntMinMax(0, 100) + 1;
  const randomTwo = getRandomIntMinMax(0, 100) + 1;
  const answerMathematicItog = Number(nod(randomOne, randomTwo));
  const questionForUser = (`${randomOne} ${randomTwo}`);

  return { questionForUser, answerMathematicItog };
};
