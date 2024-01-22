#!/usr/bin/env node

import textMessagesWithUser from '../src/index.js';
import { getQuestionAndAnswer, questionAboutResult } from '../src/games/brain-even-calc.js';

textMessagesWithUser(getQuestionAndAnswer, questionAboutResult);
