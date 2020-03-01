let showEventMessage = function(options) {
	options = $.extend(
		{
			eventType: 'CLICK',
			eventTarget: this,
			suffix: '<br/>'
		},
		options
	);
	let message =
		options.eventType +
		': ' +
		(options.eventTarget.nodeName || 'unknown') +
		options.suffix;
	$('#Messages').append(message);
};

let namedHandler = function(event) {
	if (
		!event.isPropagationStopped() &&
		!event.isImmediatePropagationStopped() &&
		!event.isDefaultPrevented()
	) {
		showEventMessage.call(this, { eventType: 'namedHandler ' + event.type });
		event.stopPropagation();
	}
};

export { showEventMessage, namedHandler };
