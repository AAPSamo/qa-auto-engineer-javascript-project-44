#!/usr/bin/env node

import { indexMainFunction } from '../src/index.js';
import { getQuestionAndAnswer, questionAboutResult } from '../src/games/brain-even-calc.js';

indexMainFunction(getQuestionAndAnswer, questionAboutResult);
// вызываются questionAboutResult(текстовка), getQuestionAndAnswer(обект)
// и их результаты передаются в indexMainFunction
