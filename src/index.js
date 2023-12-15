import readlineSync from 'readline-sync';


function getRandomInt() { //Получение рандомных целых чисел от 0 до 100 console.log(getRandomInt());
    return Math.floor(Math.random() * 100);
}


var nameUser; 

export const name = () => {
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export const randomArithmetecOperations = () => {
  let numbers = ['+', '-', '*'];
  let randomIndex = Math.floor(Math.random() * (numbers.length)); // генерируем случайный индекс в допустимом диапазоне
  return numbers[randomIndex]
}

export const answer = (questionDigit) => {
    console.log('What is the result of the expression?');
  
    let i = 0;
    let countTrueAnswers = 0;
    // var questionDigit;
  
    for (i; i <= 2; i += 1) {
        let randomOne = getRandomInt();
        let randomTwo = getRandomInt();
        let summRandomOnePlusTwo = randomOne + randomTwo;
      
        console.log('Question: ' + randomOne + ' + ' + randomTwo);
        var answerUser = readlineSync.question('Your answer: ');
        if (answerUser === summRandomOnePlusTwo) {
          console.log('Correct!');
          countTrueAnswers += 1;
        } else if (answerUser !== summRandomOnePlusTwo) {
          console.log('Error');
        } else { console.log('Error'); }
       
    }
  
    if (countTrueAnswers == 3) {
      console.log(`Congratulations, ${nameUser}!`)
    }
    else {
      console.log(`You have errors, ${nameUser}!`)
    }
  };