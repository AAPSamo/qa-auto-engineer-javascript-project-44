import readlineSync from 'readline-sync';
import { randomArithmetecOperations } from './index.js';

function getRandomInt() { // Получение рандомных целых чисел от 0 до 100
  return Math.floor(Math.random() * 50);
}

let nameUser;
// randomArithmetecOperations();

export const name = () => {
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export const answer = () => {
  console.log('What is the result of the expression?');

  let i = 0;
  let countTrueAnswers = 0;

  for (i; i <= 2; i += 1) {
    let answerUser;
    const randomOne = Number(getRandomInt());
    const randomTwo = Number(getRandomInt());

    switch (randomArithmetecOperations()) {
      case '+': {
        const summRandomOnePlusTwo = randomOne + randomTwo;
        console.log(`Question: ${randomOne} + ${randomTwo}`);
        answerUser = Number(readlineSync.question('Your answer: '));

        if (answerUser === summRandomOnePlusTwo) {
          console.log('Correct!');
          countTrueAnswers += 1;
        } else if (answerUser !== summRandomOnePlusTwo) {
          console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${summRandomOnePlusTwo}'.`);
          console.log(`Let's try again, ${nameUser}!`);
          i = 2;
          break;
        } else { console.log('Error'); }
      }
        break;

      case '-': {
        const summRandomOnePlusTwo = randomOne - randomTwo;
        console.log(`Question: ${randomOne} - ${randomTwo}`);
        answerUser = Number(readlineSync.question('Your answer: '));

        if (answerUser === summRandomOnePlusTwo) {
          console.log('Correct!');
          countTrueAnswers += 1;
        } else if (answerUser !== summRandomOnePlusTwo) {
          console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${summRandomOnePlusTwo}'.`);
          console.log(`Let's try again, ${nameUser}!`);
          i = 2;
          break;
        } else { console.log('Error'); }
      }
        break;

      case '*': {
        const summRandomOnePlusTwo = randomOne * randomTwo;
        console.log(`Question: ${randomOne} * ${randomTwo}`);
        answerUser = Number(readlineSync.question('Your answer: '));

        if (answerUser === summRandomOnePlusTwo) {
          console.log('Correct!');
          countTrueAnswers += 1;
        } else if (answerUser !== summRandomOnePlusTwo) {
          console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${summRandomOnePlusTwo}'.`);
          console.log(`Let's try again, ${nameUser}!`);
          i = 2;
          break;
        } else { console.log('Error'); }
      }
        break;
      default:
    }
  }

  if (countTrueAnswers === 3) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};
