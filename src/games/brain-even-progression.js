/* Игра "Арифметическая прогрессия"
Показываем игроку ряд чисел, образующий арифметическую прогрессию,
заменив любое из чисел двумя точками.
Игрок должен определить это число.
*/

import readlineSync from 'readline-sync';
import {
  progressionGenerator, getRandomIntMinMax,
} from '../index.js';

let nameUser;
export const name = () => {
  console.log('Welcome to the Brain Games!');
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export const answer = () => {
  console.log('What number is missing in the progression? ');

  let i = 0;
  let countTrueAnswers = 0;

  for (i; i <= 2; i += 1) {
    const MaxLenght = Number(getRandomIntMinMax(6, 10)); // Длина будет от 6 до 10
    // console.log("MaxLenght " + MaxLenght) // сгенерировано 9
    const nodItog = progressionGenerator(MaxLenght);
    // console.log("nodItog " + nodItog)
    const randomForRemoved = getRandomIntMinMax(0, MaxLenght - 1);
    // console.log("randomForRemoved " + randomForRemoved)
    const removed = nodItog.splice(randomForRemoved, 1, '..');
    const removed2 = Number(removed);
    // console.log("removed " + removed);
    // в индексе,элемент заменяется на .. и то что заменилось передается в removed

    console.log(`Question: ${nodItog.join(' ')}`); // .join(' ') убирает ,  в выводе массива
    const answerUser = Number(readlineSync.question('Your answer: '));

    if (answerUser === removed2) {
      console.log('Correct!');
      countTrueAnswers += 1;
    } else if (answerUser !== removed2) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${removed}'.`);
      console.log(`Let's try again, ${nameUser}!`);
      i = 2;
      break;
    } else { console.log('Error'); }
  }

  if (countTrueAnswers === 3) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};
