console.log('Hello from index');

function test() {
	return;
}

import('./print.js').then(module => {
	module.print('Hello World');
});

console.log(test());
