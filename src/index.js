// import readlineSync from 'readline-sync';
// let nameUser;

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
