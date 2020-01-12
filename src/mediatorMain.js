import { Task } from './components/task.js';
import {
	NotificationService,
	LoggingService,
	AuditingService
} from './components/services.js';
import { ObservableTask } from './components/obserableTask.js';
import { mediator } from './components/mediator.js';

let notifiy = new NotificationService();
let log = new LoggingService();
let audit = new AuditingService();

let task = new Task({
	name: 'Task1',
	priority: 2,
	project: 'project1',
	user: 'Michael',
	completed: false
});

mediator.subscribe('complete', notifiy, notifiy.update);
mediator.subscribe('complete', log, log.update);
mediator.subscribe('complete', audit, audit.update);

task.complete = function() {
	mediator.publish('complete', this);
	Task.prototype.complete.call(this);
};

task.complete();
task.save();
