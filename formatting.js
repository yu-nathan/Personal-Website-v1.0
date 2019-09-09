// Typing effect for my name.
var i = 0;
var txt = " Nathan Yu"
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("header").innerHTML += txt.charAt(i);
        i += 1;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

// Erasing leading whitespace from pre HTML block. SRC: https://stackoverflow.com/questions/17257200/removing-leading-whitespace-from-indented-html-source-in-pre-code-tags/26230865
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
