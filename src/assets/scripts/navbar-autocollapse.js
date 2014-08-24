/* 
The MIT License (MIT)

Copyright (c) 2014 David Rodenas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
/**
	Collapses the navbar automatically if the 
	screen is in mobile mode. 
	*it has hardcoded the window width in which it becomes active.
*/
$(function() {

	// correct a bug from bootstrap: when ask to hide but it is not init, it shows
	$('.navbar-collapse').collapse({toggle:false});

	//$('.navbar-collapse').click('li', function() {
	$(document).click(function() {
      if ($(document).width() < 768){
        $('.navbar-collapse').collapse('hide');
      }
	});
});
