const { parentPort } = require('worker_threads');

parentPort.postMessage('decrement');
