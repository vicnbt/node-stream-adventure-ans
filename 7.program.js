var request = require('request');
var r = request.post('http://eezap.ru:8099');
process.stdin.pipe(r).pipe(process.stdout);