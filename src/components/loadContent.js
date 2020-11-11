/* the import of jQuery in this module will cause prior imports of the full file to fail
 * Hence for this module to work jQuery must already be available in the project
 * As this is a learning journey with jQuery I am currently satisfied with this limitation
 *
 * import '../node_modules/jquery/dist/jquery.js';
 *
 */
let showMessage = function(options) {
	if (typeof options !== 'object') {
		options = { message: 'Parameter not an object', error: true };
	}

	options.message = options.message || 'No message specified';
	options.error = options.error || false;

	$('#Messages')
		.append(options.error ? 'Error: ' : '')
		.append(options.message)
		.append('<br/>');
};

let loadContent = function(options) {
	let defer = $.Deferred();
	let msg = '';

	if (typeof options !== 'object') {
		msg = 'Expecting a parameter object';
		showMessage({ message: msg, error: true });
		return defer.resolve({ statusText: msg });
	}

	options.selector = options.selector || '';
	options.url = options.url || '';
	options.dynamic = options.dynamic || false;

	if (options === '') {
		msg = 'Missing Url';
		showMessage({ message: msg, error: true });
		return defer.resolve({ statusText: msg });
	}

	let $div = $(options.selector);

	if ($div.length > 0) {
		$.get(options.url, function() {}, 'html')
			.done(function(result) {
				$div.html(result);
				if (!options.dynamic) {
					defer.resolve();
				}
			})
			.fail(function(results) {
				msg = 'Could not load Url: ' + options.url;
				showMessage({ message: msg, error: true });
				defer.resolve(result);
			});
		if (options.dynamic) {
			$div
				.off('complete,failure')
				.on('complete', function(event) {
					defer.resolve();
				})
				.on('failure', function(event, result) {
					msg = 'Dynamic content ' + result.statusText;
					showMessage({ message: msg, error: true });
					defer.resolve(result);
				});
		}
	} else {
		msg = 'Error in Selector';
		showMessage({ message: msg, error: true });
		return defer.resolve({ statusText: msg });
	}

	return defer.promise();
};

export { loadContent, showMessage };
