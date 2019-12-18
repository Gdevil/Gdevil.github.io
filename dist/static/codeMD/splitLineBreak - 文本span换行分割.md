```
var splitLineBreak = function splitLineBreak(elt) {
	var para = elt;

	$(window).on({
		resize: function resize() {
			para.each(function () {
				var current = $(this);
				var text = current.text();
				var newText = '<span><span>';
				var _length = text.length;
				var cursor = 0;

				var words = text.split(' ');
				current.text(words[0]);
				var height = current.height();
				var infoWords = [{
					length: words[0].length,
					pos: 0
				}];

				for (var j = 1; j < words.length; j++) {
					infoWords.push({
						length: words[j].length,
						pos: infoWords[j - 1].pos + infoWords[j - 1].length + 1
					});
				}
				for (var i = 1; i < words.length; i++) {
					var chars = '';
					current.text(current.text() + ' ' + words[i]);

					if (current.height() > height) {
						height = current.height();
						var index = text.indexOf(words[i - 1]) + words[i - 1].length;
						newText += text.substring(infoWords[cursor].pos, infoWords[i - 1].pos + infoWords[i - 1].length) + '</span></span> <span><span>';
						cursor = i;
						// for( var j = 0; j < words[i-1].length; j++ ) chars += 'j';
						// text = text.replace(new RegExp(words[i-1]), chars);
						//console.log(words[i-1]);
					}
				}
				newText += text.substring(infoWords[cursor].pos, _length) + '</span></span>';
				current.html('').html(newText);
			});
		}
	}).trigger('resize');
};
```