// Typing effect for my header.
var i = 0;
var txt = "Hello World!";
var header = document.getElementById("header");
var cursor = true;

var typing = setInterval(function() {
        i += 1;
        header.innerHTML = "C:\\Users\\nat> " + txt.slice(0, i);
        if (i == txt.length) {
            clearInterval(typing);
            setInterval(function() {
                if (cursor) {
                    header.innerHTML = "C:\\Users\\nat> " + txt + "\u25AE";
                    cursor = false;
                } else {
                    header.innerHTML = "C:\\Users\\nat> " + txt;
                    cursor = true;
                };
            }, 530);
        };
}, 100);

// Erasing leading whitespace from pre HTML block.
// SRC: https://stackoverflow.com/questions/17257200/removing-leading-whitespace-from-indented-html-source-in-pre-code-tags/26230865
[].forEach.call(document.querySelectorAll('code'), function($code) {
    var lines = $code.innerHTML.split('\n');

    if (lines[0] === '')
    {
        lines.shift()
    }

    var matches;
    var indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null;
    if (!!indentation) {
        lines = lines.map(function(line) {
            line = line.replace(indentation, '')
            return line.replace(/\t/g, '    ')
        });

        $code.innerHTML = lines.join('\n').trim();
    }
});

// Formatting my age so that it stays updated.
var d = new Date();
var month = d.getMonth();
var date = d.getDate();
var year = d.getFullYear();
var age;
if (month > 6 || (month == 6 && date >= 22)) {
    age = year - 1997;
} else {
    age = year - 1997 - 1;
}
document.getElementById("age").innerHTML = age;
