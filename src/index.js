// import readlineSync from 'readline-sync';
// let nameUser;
import readlineSync, { } from 'readline-sync';
import nameUserWelcomeFunction from './cli.js';

export function indexMainFunction(getQuestionAndAnswer, questionAboutResult) {
  let countTrueAnswers = 0;
  const maxTrueAnswers = 3;
  const nameUserWelcomeConst = nameUserWelcomeFunction();
  // Из cli 1. Welcome to the Brain Games! 2. May I have your name? 3. потребуется ввести имя

  while (countTrueAnswers < maxTrueAnswers) {
    const currentQuestion = getQuestionAndAnswer();
    console.log(questionAboutResult); // -console.log('What is the result of the expression?')

    console.log(`Question: ${currentQuestion.questionForUser}`);// Задается вопрос Question:<Цифра>
    const userAnswer = readlineSync.question('Your answer: ');// вводится ответ от пользователя

    if (userAnswer === String(currentQuestion.answerMathematicItog)) {
      console.log('Correct!');
      countTrueAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${currentQuestion.answerMathematicItog}'.`,
      );
      console.log(`Let's try again, ${nameUserWelcomeConst}!`);
      countTrueAnswers = 0;
      break;
    }
  }

  if (countTrueAnswers === maxTrueAnswers) {
    console.log(`Congratulations, ${nameUserWelcomeConst}!`);
  }
}

export const randomArithmetecOperations = () => {
  const numbers = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (numbers.length));// генер.случ. индекс в диапазоне
  return numbers[randomIndex];
};

export function getRandomInt() {
  // Получение рандомных целых чисел от 0 до 100 console.log(getRandomInt());
  return Math.floor(Math.random() * 100);
}

export function getRandomIntMinMax(min, max) {
  // Получение рандомных целых чисел от 0 до Step console.log(getRandomInt());
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const nod = (intA, intB) => {
  let i = 0;
  let randomOne = Number(intA);
  let randomTwo = Number(intB);

  for (i; i <= 2; i += 1) {
    while (randomOne !== 0 && randomTwo !== 0) {
      if (randomOne > randomTwo) { // если а больше б, то а присваиваем а/б
        randomOne %= randomTwo;
      } else {
        randomTwo %= randomOne;// наоборот
      }
    }
  }
  return randomOne + randomTwo;
};

export const progressionGenerator = (progressionLength) => {
  let i;
  let startFrom = getRandomIntMinMax(1, 30);
  const step = Number(getRandomIntMinMax(1, 6));// Интервал
  const makeArray = [];

  for (i = 1; i <= progressionLength; i += 1) {
    startFrom += step;
    makeArray.push(startFrom);
  }
  return makeArray;
};

/// Проверка числа не Простое оно или нет.
export function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
