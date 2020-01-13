import { repo } from './components/repo.js';
import { Task } from './components/task.js';

class IdTask extends Task {
	constructor(data) {
		super(data);
		this.id = data.id;
	}
}

let task1 = new IdTask({
	id: 1,
	name: 'Task1',
	priority: 2,
	project: 'project1',
	user: 'Michael',
	completed: false
});

let task2 = new IdTask({
	id: 2,
	name: 'Task2',
	priority: 2,
	project: 'project1',
	user: 'Jim',
	completed: false
});

let task3 = new IdTask({
	id: 3,
	name: 'Task3',
	priority: 2,
	project: 'project1',
	user: 'John',
	completed: false
});

let task4 = new IdTask({
	id: 4,
	name: 'Task4',
	priority: 2,
	project: 'project1',
	user: 'Trisha',
	completed: false
});

repo.execute('save', task1);
repo.execute('save', task2);
repo.execute('save', task3);
repo.execute('save', task4);

console.log(repo.tasks);
repo.tasks = {};
console.log(repo.tasks);

repo.replay();
console.log(repo.tasks);
