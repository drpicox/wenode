/* Simple Universal analytics hooks for event tracking.
*/
$(function() {
	'use strict';
	var currentPath = location.pathname;

	$('a[data-sponsor]').click(function() {
		ga('send','event','sponsor','click',$(this).attr('data-sponsor'));
	});

	$('a[data-supporter]').click(function() {
		ga('send','event','supporter','click',$(this).attr('data-supporter'));
	});

	$('a[data-buyticket]').click(function() {
		ga('send','event','buyticket','click',$(this).attr('data-buyticket')+currentPath);
	});

	$('a[target="_blank"]').click(function() {
		ga('send','event','leaveTo','click',$(this).attr('href'));
	});

	$('a[href^="mailto:"]').click(function() {
		ga('send','event','mailTo','click',$(this).attr('href'));
	});

	$('.navbar-collapse').on('activate.bs.scrollspy', function(event) {
		currentPath = location.pathname + $(event.target).find('a').attr('href');
		ga('send','pageview',currentPath);
	});
});