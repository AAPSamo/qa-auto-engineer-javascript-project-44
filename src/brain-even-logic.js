import readlineSync from "readline-sync";

export const name = () => {
  const nameUser = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${nameUser}!`);
};

export const answer = (questionDigit) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log("Question: " + questionDigit);
  const answerUser = readlineSync.question("Your answer: ");
  const i = 1;
  //var questionDigit;

  for (i <= 3; ; i += 1) {
    if (questionDigit % 2 == 0) {
      if (answerUser == "Yes" || "yes") {
        console.log("Correct!");
      } else if (answerUser == "No" || "no") {
        console.log("Error");
      }
    } else {
      if (answerUser == "Yes" || "yes") {
        console.log("Error");
      } else if (answerUser == "No" || "no") {
        console.log("Correct!");
      }
    }
  }
};
