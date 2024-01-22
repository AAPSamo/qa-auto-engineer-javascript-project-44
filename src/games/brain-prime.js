import getRandomIntMinMax from '../utils.js';

export const questionAboutResult = 'Answer "yes" if given number is prime. Otherwise answer "no". ';

/// Проверка числа не Простое оно или нет.
function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

export const getQuestionAndAnswer = () => {
  let questionForUser;
  let answerMathematicItog = '';

  for (let i = 0; i <= 2; i += 1) {
    questionForUser = getRandomIntMinMax(1, 100);
    const primeOrNot = isPrime(questionForUser);

    answerMathematicItog = (primeOrNot % 2 === true) ? 'yes' : 'no';
  }

  return { questionForUser, answerMathematicItog };
};
