import { getRandomInt, randomArithmetecOperations } from '../index.js';

export const questionAboutResult = 'What is the result of the expression?';

export function getQuestionAndAnswer() { // -console.log('What is the result of the expression?');
  let i = 0;
  let answerMathematicItog;
  let questionForUser;
  for (i; i <= 2; i += 1) {
    const randomOne = Number(getRandomInt());
    const randomTwo = Number(getRandomInt());
    const operator = randomArithmetecOperations();
    switch (operator) {
      case '+':
        answerMathematicItog = randomOne + randomTwo;
        // console.log(`Question: ${randomOne} + ${randomTwo}`);
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
      default:
    }
  }
  return { questionForUser, answerMathematicItog };
}
