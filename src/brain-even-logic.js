import readlineSync from 'readline-sync';

let nameUser;

export const name = () => {
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export const answer = (questionDigit) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  let countTrueAnswers = 0;

  for (i; i <= 2; i += 1) {
    if (questionDigit[i] % 2 == 0) {
      console.log(`Question: ${questionDigit[i]}`);
      var answerUser = readlineSync.question('Your answer: ');
      if (answerUser === 'yes') {
        console.log('Correct!');
        countTrueAnswers += 1;
      } else if (answerUser === 'no') {
        console.log(`'${answerUser}'` + ' is wrong answer ;(. Correct answer was ' + '"yes"' + '.');
        console.log(`Let\'s try again, ${nameUser}!`);
        i = 2;
      } else {
        console.log(`'${answerUser}'` + ' is wrong answer ;(. Correct answer was ' + '"yes"' + '.');
        console.log(`Let\'s try again, ${nameUser}!`);
        i = 2;
      }
    } else {
      console.log(`Question: ${questionDigit[i]}`);
      var answerUser = readlineSync.question('Your answer: ');
      if (answerUser === 'yes') {
        console.log(`'${answerUser}'` + ' is wrong answer ;(. Correct answer was ' + '"no"' + '.');
        console.log(`Let\'s try again, ${nameUser}!`);
        i = 2;
      } else if (answerUser === 'no') {
        console.log('Correct!');
        countTrueAnswers += 1;
      } else {
        console.log(`'${answerUser}'` + ' is wrong answer ;(. Correct answer was ' + '"no"' + '.');
        console.log(`Let\'s try again, ${nameUser}!`);
        i = 2;
      }
    }
  }
  if (countTrueAnswers == 3) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};
