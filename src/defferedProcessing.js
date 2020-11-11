import '../node_modules/jquery/dist/jquery.js';
import { loadContent, showMessage } from './components/loadContent.js';

$(function() {
	$('#Load').on('click', function(event) {
		$.when(
			showMessage({ message: 'Starting processing' }),
			loadContent({
				url: 'Contentpages/Content4.html',
				selector: '#Section1',
				dynamic: true
			}),
			loadContent({ url: 'Contentpages/Content2.html', selector: '#Section2' }),
			loadContent({
				url: 'Contentpages/Content5.html',
				selector: '#Section3',
				dynamic: true
			}),
			showMessage({ message: 'Done with processing' })
		)
			.done(function() {})
			.fail(function(result) {
				$('#Messages')
					.append('Failure! <br/>')
					.append('Result: ' + result.statusText + '<br/>');
			})
			.always(function() {
				$('#Proceed').removeAttr('disabled');
			});
	});
});
