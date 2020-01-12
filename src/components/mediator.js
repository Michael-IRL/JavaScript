let mediator = (function() {
	let channels = {};

	let subscribe = function(channel, context, func) {
		if (!mediator.channels[channel]) {
			mediator.channels[channel] = [];
		}
		mediator.channels[channel].push({
			context: context,
			func: func
		});
	};

	let publish = function(channel) {
		if (!this.channels[channel]) {
			return false;
		}

		let args = Array.prototype.slice.call(arguments, 1);

		for (let i = 0; i < this.channels[channel].length; i++) {
			let sub = mediator.channels[channel][i];
			sub.func.apply(sub.context, args);
		}
	};
	return {
		channels: {},
		subscribe: subscribe,
		publish: publish
	};
})();

export { mediator };
