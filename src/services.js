let NotificationService = function() {
	let message = 'Notifiying ';
	this.update = function(task) {
		console.log(message + task.user + ' for task ' + task.name);
	};
};

let LoggingService = function() {
	let message = 'Logging ';
	this.update = function(task) {
		console.log(message + task.user + ' for task ' + task.name);
	};
};

let AuditingService = function() {
	let message = 'Auditing ';
	this.update = function(task) {
		console.log(message + task.user + ' for task ' + task.name);
	};
};

export { NotificationService, LoggingService, AuditingService };
