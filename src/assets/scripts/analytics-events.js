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

	$('.navbar-collapse').on('activate.bs.scrollspy', function(event) {
		currentPath = location.pathname + $(event.target).find('a').attr('href');
		ga('send','pageview',currentPath);
	});
});