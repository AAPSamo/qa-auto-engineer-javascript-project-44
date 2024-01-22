import { getRandomInt } from '../utils.js';

export const questionAboutResult = 'What is the result of the expression?';

const randomArithmetecOperations = () => {
  const numbers = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (numbers.length));// генер.случ. индекс в диапазоне
  return numbers[randomIndex];
};

export function getQuestionAndAnswer() {
  let answerMathematicItog;
  let questionForUser;
  const randomOne = Number(getRandomInt());
  const randomTwo = Number(getRandomInt());
  const operator = randomArithmetecOperations();
  switch (operator) {
    case '+':
      answerMathematicItog = randomOne + randomTwo;
      questionForUser = `${randomOne} ${operator} ${randomTwo}`;
      break;

    case '-':
      answerMathematicItog = randomOne - randomTwo;
      questionForUser = `${randomOne} ${operator} ${randomTwo}`;
      break;

    case '*':
      answerMathematicItog = randomOne * randomTwo;
      questionForUser = `${randomOne} ${operator} ${randomTwo}`;
      break;
    default: break;
  }
  return { questionForUser, answerMathematicItog };
}
