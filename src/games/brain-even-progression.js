import {
  getRandomIntMinMax,
} from '../utils.js';

export const questionAboutResult = 'What number is missing in the progression? ';

const progressionGenerator = (progressionLength) => {
  let startFrom = getRandomIntMinMax(1, 30);
  const step = Number(getRandomIntMinMax(1, 6));// Интервал
  const makeArray = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    startFrom += step;
    makeArray.push(startFrom);
  }
  return makeArray;
};

export const getQuestionAndAnswer = () => {
  let questionForUser = '';
  let answerMathematicItog = '';

  const MaxLenght = Number(getRandomIntMinMax(6, 10)); // Длина будет от 6 до 10
  const nodItog = progressionGenerator(MaxLenght);
  const randomForRemoved = getRandomIntMinMax(0, MaxLenght - 1);
  const removed = nodItog.splice(randomForRemoved, 1, '..');
  const removed2 = Number(removed);

  questionForUser = nodItog.join(' ');
  answerMathematicItog = removed2;

  return { questionForUser, answerMathematicItog };
};
