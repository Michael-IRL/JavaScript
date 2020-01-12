import { Task } from './components/task.js';
import {
	NotificationService,
	LoggingService,
	AuditingService
} from './components/services.js';
import { ObservableTask } from './components/obserableTask.js';

let notifiy = new NotificationService();
let log = new LoggingService();
let audit = new AuditingService();

let task = new ObservableTask({
	name: 'Task1',
	priority: 2,
	project: 'project1',
	user: 'Michael',
	completed: false
});

task.addObserver(notifiy.update);
task.addObserver(log.update);
task.addObserver(audit.update);

/*notifiy.update(task);
log.update(task);
audit.update(task);*/

task.complete();
task.save();

task.removeObserver(audit.update);
task.save();
