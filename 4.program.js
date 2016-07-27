var through = require('through'),
    split = require('split'),
    even = false,
    tr = through(function (buf) {
        buf = buf.toString();
        if(even){
            buf = buf.toUpperCase();
        } else {
            buf = buf.toLowerCase();
        }
        this.queue(buf + "\n");
        even = !even;
    });

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);