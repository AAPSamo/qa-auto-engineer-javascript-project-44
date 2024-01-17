#!/usr/bin/env node

import { indexMainFunction } from '../src/index.js';
import { getQuestionAndAnswer, questionAboutResult } from '../src/games/brain-even-logic.js';

indexMainFunction(getQuestionAndAnswer, questionAboutResult);
