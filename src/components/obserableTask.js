import { Task } from './task.js';
import { ObserverList } from './observerList.js';

let ObservableTask = function(data) {
	Task.call(this, data);
	this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer) {
	this.observers.add(observer);
};

ObservableTask.prototype.noifiy = function(context) {
	let observerCount = this.observers.count();
	for (let i = 0; i < observerCount; i++) {
		this.observers.get(i)(context);
	}
};

ObservableTask.prototype.save = function() {
	this.noifiy(this);
	Task.prototype.save.call(this);
};

ObservableTask.prototype.complete = function() {
	Task.prototype.complete.call(this);
};

ObservableTask.prototype.removeObserver = function(observer) {
	this.observers.removeAt(this.observers.indexOf(observer, 0));
};

export { ObservableTask };
