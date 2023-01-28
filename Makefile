build:
	pnpm webpack --config webpack.config.js

dev: 
	pnpx ts-node ./server/index.ts

