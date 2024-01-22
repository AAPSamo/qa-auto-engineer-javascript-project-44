import getRandomIntMinMax from '../utils.js';

export const questionAboutResult = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const questionDigit = Number(getRandomIntMinMax(0, 100));
  const questionForUser = questionDigit;
  const answerMathematicItog = (questionDigit % 2 === 0) ? 'yes' : 'no';
  return { questionForUser, answerMathematicItog };
};
