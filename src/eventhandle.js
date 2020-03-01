import '../node_modules/jquery/dist/jquery.slim.js';
import { showEventMessage } from './components/showEventMessage.js';
import {
	loadRecords,
	notifyObject,
	internalObject
} from './components/loadRecords.js';

$(function() {
	$('.clickable')
		.on('click.test', internalObject, function(event) {
			let $this = $(this),
				clickCount = ($this.data('clickcount') || 0) + 1;
			$this.data('clickcount', clickCount);
			showEventMessage.call(this, {
				eventType: '' + clickCount + ') ' + event.type
			});
			if (clickCount === 3) {
				$this.trigger('click3');
			}
			if ($this.attr('type') === 'button') {
				let theObject = event.data || { records: [] };
				$('#Messages').append(
					'Record count: ' + theObject.records.length + '<br/>'
				);
				loadRecords();
			}
		})
		.on('click3', function(event) {
			event.stopPropagation();
			showEventMessage.call(this, { eventType: event.type });
			$(this).addClass('highlight');
		});

	$(notifyObject).on('recordsloaded', function(event, extraObject) {
		showEventMessage.call(this, { eventType: event.type });
		$.each(extraObject.records, function() {
			$('#Messages').append(
				' -- ' + this.description + ': ' + this.value + '<br/>'
			);
		});
	});
});
