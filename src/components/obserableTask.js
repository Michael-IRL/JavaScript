import { Task } from './task.js';
import { ObserverList } from './observerList.js';

class ObservableTask extends Task {
	constructor(data) {
		super(data);
		this.observers = new ObserverList();
	}

	addObserver(observer) {
		this.observers.add(observer);
	}

	noifiy(context) {
		let observerCount = this.observers.count();
		for (let i = 0; i < observerCount; i++) {
			this.observers.get(i)(context);
		}
	}

	save() {
		this.noifiy(this);
		Task.prototype.save.call(this);
	}

	removeObserver(observer) {
		this.observers.removeAt(this.observers.indexOf(observer, 0));
	}
}

export { ObservableTask };
