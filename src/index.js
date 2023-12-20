import readlineSync from 'readline-sync';

let nameUser;

export const name = () => {
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export const randomArithmetecOperations = () => {
  const numbers = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * (numbers.length)); // генерируем случайный индекс в допустимом диапазоне
  return numbers[randomIndex];
};

export const answer = (questionDigit) => {
  console.log('What is the result of the expression?');

  let i = 0;
  let countTrueAnswers = 0;
  // var questionDigit;

  for (i; i <= 2; i += 1) {
    const randomOne = getRandomInt();
    const randomTwo = getRandomInt();
    const summRandomOnePlusTwo = randomOne + randomTwo;

    console.log(`Question: ${randomOne} + ${randomTwo}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === summRandomOnePlusTwo) {
      console.log('Correct!');
      countTrueAnswers += 1;
    } else if (answerUser !== summRandomOnePlusTwo) {
      console.log('Error');
    } else { console.log('Error'); }
  }

  if (countTrueAnswers == 3) {
    console.log(`Congratulations, ${nameUser}!`);
  } else {
    console.log(`You have errors, ${nameUser}!`);
  }
};

export function getRandomInt() { // Получение рандомных целых чисел от 0 до 100 console.log(getRandomInt());
  return Math.floor(Math.random() * 100);
}

export function getRandomIntMinMax(min, max) { // Получение рандомных целых чисел от 0 до Step console.log(getRandomInt());
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const nod = (intA, intB) => {
  let i = 0;

  for (i; i <= 2; i += 1) {
    let randomOne = intA;
    let randomTwo = intB;

    while (randomOne != 0 & randomTwo != 0) {
      if (randomOne > randomTwo) { // если а больше б, то а присваиваем а/б
        randomOne %= randomTwo;
      } else {
        randomTwo %= randomOne;// наоборот
      }
    }

    return randomOne + randomTwo;
  }
};

export const progressionGenerator = () => {
  let i;
  let startFrom = getRandomIntMinMax(1, 50);
  const step = getRandomIntMinMax(1, 6);
  const progressionLength = getRandomIntMinMax(5, 10);
  const makeArray = [];

  for (i = 1; i <= progressionLength; i++) {
    startFrom += step;
    makeArray.push(startFrom);
    // console.log(startFrom);
  }
  return makeArray;
};

/// Проверка числа не Простое оно или нет.
export function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

/// Проверка чисел от 0 до МАКС не Простое оно или нет.
/*function printPrimes(max) {
  for (let i = 2; i <= max; i++) {
    if (isPrime(i)) console.log(i);
  }
}
*/