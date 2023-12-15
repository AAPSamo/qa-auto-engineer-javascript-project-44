import readlineSync from 'readline-sync';
import { randomArithmetecOperations } from '../src/index.js';

function getRandomInt() { //Получение рандомных целых чисел от 0 до 100 console.log(getRandomInt());
    return Math.floor(Math.random() * 50);
}


var nameUser;
randomArithmetecOperations(); 

export const name = () => {
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export const answer = () => {
  console.log('What is the result of the expression?');
  
  let i = 0;
  let countTrueAnswers = 0;
  ;
  // var questionDigit;
  
  for (i; i <= 2; i += 1) {
    let randomOne = getRandomInt();
    let randomTwo = getRandomInt();
    
    switch (randomArithmetecOperations()) {
      case '+': {
        let summRandomOnePlusTwo = randomOne + randomTwo;
        console.log('Question: ' + randomOne + ' + ' + randomTwo);
        var answerUser = readlineSync.question('Your answer: ');
    
        if (answerUser == summRandomOnePlusTwo) {
          console.log('Correct!');
          countTrueAnswers += 1;

        } else if (answerUser != summRandomOnePlusTwo) {
          console.log('\'' +answerUser +'\''+' is wrong answer ;(. Correct answer was '+'\''+ summRandomOnePlusTwo+'\''+'.')
          console.log(`Let\'s try again, ${nameUser}!`);
          i = 2;
          break;
        } else { console.log('Error'); }
       
      }
      break;
    
      case '-': {
        let summRandomOnePlusTwo = randomOne - randomTwo;
        console.log('Question: ' + randomOne + ' - ' + randomTwo);
        var answerUser = readlineSync.question('Your answer: ');
    
        if (answerUser == summRandomOnePlusTwo) {
          console.log('Correct!');
          countTrueAnswers += 1;

        } else if (answerUser != summRandomOnePlusTwo) {
          console.log('\'' +answerUser +'\''+' is wrong answer ;(. Correct answer was '+'\''+ summRandomOnePlusTwo+'\''+'.')
          console.log(`Let\'s try again, ${nameUser}!`);
          i = 2;
          break;

        } else { console.log('Error'); }
       
      }
      break;

      case '*': {
        let summRandomOnePlusTwo = randomOne * randomTwo;
        console.log('Question: ' + randomOne + ' * ' + randomTwo);
        var answerUser = readlineSync.question('Your answer: ');
    
        if (answerUser == summRandomOnePlusTwo) {
          console.log('Correct!');
          countTrueAnswers += 1;

        } else if (answerUser != summRandomOnePlusTwo) {
          console.log('\'' +answerUser +'\''+' is wrong answer ;(. Correct answer was '+'\''+ summRandomOnePlusTwo+'\''+'.')
          console.log(`Let\'s try again, ${nameUser}!`);
          i = 2;
          break;

        } else { console.log('Error'); }
       
      }
      break;

    }
  
  }
  
  if (countTrueAnswers == 3) {
    console.log(`Congratulations, ${nameUser}!`)
  }
  /*
  else {
    console.log(`You have errors, ${nameUser}!`)
  }
  */
}