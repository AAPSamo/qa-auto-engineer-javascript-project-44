#!/usr/bin/env node

/* Игра "Простое ли число?"
*/
import { indexMainFunction } from '../src/index.js';
import { getQuestionAndAnswer, questionAboutResult } from '../src/games/brain-prime.js';

indexMainFunction(getQuestionAndAnswer, questionAboutResult);
// вызываются questionAboutResult(текстовка), getQuestionAndAnswer(обект)
// и их результаты передаются в indexMainFunction
