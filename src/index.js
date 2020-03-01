console.log('Hello from index');

let anArry = ['tes1', 'test2', 'test3'];

console.log(...anArry);

function test() {
	return;
}

import('./components/print.js').then(module => {
	module.print('Hello World');
});

console.log(test());
