import readlineSync, { } from 'readline-sync';
import nameUserWelcomeFunction from './cli.js';

export default function textMessagesWithUser(getQuestionAndAnswer, questionAboutResult) {
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
