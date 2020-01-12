console.log('Hello from index');

function test() {
	return;
}

import('./components/print.js').then(module => {
	module.print('Hello World');
});

console.log(test());
