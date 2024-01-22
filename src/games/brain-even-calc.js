import getRandomIntMinMax from '../utils.js';

export const questionAboutResult = 'What is the result of the expression?';

const randomArithmetecOperations = () => {
  const numbers = ['+', '-', '*'];
  return numbers[getRandomIntMinMax(0, 2)];
};

export function getQuestionAndAnswer() {
  let answerMathematicItog;
  const randomOne = Number(getRandomIntMinMax(0, 100));
  const randomTwo = Number(getRandomIntMinMax(0, 100));
  const operator = randomArithmetecOperations();
  switch (operator) {
    case '+':
      answerMathematicItog = randomOne + randomTwo;
      break;

    case '-':
      answerMathematicItog = randomOne - randomTwo;
      break;

    case '*':
      answerMathematicItog = randomOne * randomTwo;
      break;
    default: break;
  }
  const questionForUser = `${randomOne} ${operator} ${randomTwo}`;
  return { questionForUser, answerMathematicItog };
}
