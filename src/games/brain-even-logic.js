import { getRandomInt } from '../index.js';

export const questionAboutResult = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const questionDigit = Number(getRandomInt());
  const questionForUser = questionDigit;
  let answerMathematicItog;
  if (questionDigit % 2 === 0) {
    answerMathematicItog = 'yes';
  } else { answerMathematicItog = 'no'; }
  // Короткая запись const answer = (question % 2 === 0) ? 'yes' : 'no';

  return { questionForUser, answerMathematicItog };
};
