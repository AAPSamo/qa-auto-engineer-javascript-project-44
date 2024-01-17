#!/usr/bin/env node

/* Игра "НОД"
Необходимо реализовать игру "наибольший общий делитель (НОД)".Суть игры в следующем:
пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и
ввести наибольший общий делитель этих чисел.
*/

import { indexMainFunction } from '../src/index.js';
import { getQuestionAndAnswer, questionAboutResult } from '../src/games/brain-even-gcd.js';

indexMainFunction(getQuestionAndAnswer, questionAboutResult);
// вызываются questionAboutResult(текстовка), getQuestionAndAnswer(обект)
// и их результаты передаются в indexMainFunction
