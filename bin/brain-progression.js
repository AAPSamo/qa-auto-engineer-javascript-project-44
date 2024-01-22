#!/usr/bin/env node

import textMessagesWithUser from '../src/index.js';
import { getQuestionAndAnswer, questionAboutResult } from '../src/games/brain-even-progression.js';

textMessagesWithUser(getQuestionAndAnswer, questionAboutResult);
