export function getRandomInt() {
  // Получение рандомных целых чисел от 0 до 100 console.log(getRandomInt());
  return Math.floor(Math.random() * 100);
}

export function getRandomIntMinMax(min, max) {
  // Получение рандомных целых чисел от 0 до Step console.log(getRandomInt());
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
