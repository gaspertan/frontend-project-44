install:
	npm ci
brain-gcd:

	node bin/brain-gcd.js
	
brain-even:

	node bin/brain-even.js

brain-progression:

    node bin/brain-progression.js
	
brain-calc:

	node bin/brain-calc.js

brain-games:

	node bin/brain-games.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .
