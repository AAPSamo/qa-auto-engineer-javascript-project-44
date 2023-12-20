install: 
	npm ci

run:
	bin/nodejs-package.js 10

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint:	

lintFix:
	npx eslint . --fix

