var concat = require('concat-stream'),
    con = concat(function (buf) {
        buf = buf.toString().split("").reverse().join("");
        process.stdout.write(buf)
    });

process.stdin
    .pipe(con);
