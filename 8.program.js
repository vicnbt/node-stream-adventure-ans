var ws = require('websocket-stream');
var stream = ws('ws://eezap.ru:8099');
stream.write('hello\n');
