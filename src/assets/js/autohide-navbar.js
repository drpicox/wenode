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
(function($) {
	return; // comment this line to enable
	var factor, navbar, maxTop;

	navbar = $('.navbar');   // class of the element to be hidden
	maxTop = window.scrollY; // initial scrollY to avoid wierd hiddings
	factor = 3;              // slowness in showing

	$(window).scroll(function() {
		var height, newTop, scrollY;

		height = navbar.height()*factor + 3;
		scrollY = Math.max(0, window.scrollY);
		maxTop = Math.max(maxTop, scrollY - height);

		newTop = maxTop - scrollY;
		newTop = Math.min(0, newTop/factor);

		if (newTop === 0) {
			maxTop = scrollY;
		}

		navbar.css('top', newTop);
	});

})(jQuery);