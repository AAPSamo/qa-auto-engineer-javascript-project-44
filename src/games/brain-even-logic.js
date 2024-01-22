import { getRandomInt } from '../utils.js';

export const questionAboutResult = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const questionDigit = Number(getRandomInt());
  const questionForUser = questionDigit;
  const answerMathematicItog = (questionDigit % 2 === 0) ? 'yes' : 'no';
  return { questionForUser, answerMathematicItog };
};
