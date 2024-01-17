#!/usr/bin/env node

/* Игра "Арифметическая прогрессия"
Показываем игроку ряд чисел, образующий арифметическую прогрессию,
заменив любое из чисел двумя точками.
Игрок должен определить это число.
*/

import { indexMainFunction } from '../src/index.js';
import { getQuestionAndAnswer, questionAboutResult } from '../src/games/brain-even-progression.js';

indexMainFunction(getQuestionAndAnswer, questionAboutResult);
// вызываются questionAboutResult(текстовка), getQuestionAndAnswer(обект)
// и их результаты передаются в indexMainFunction
