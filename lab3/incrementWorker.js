const { parentPort } = require('worker_threads');// определяем воркеры, которые отправляют сообщения об инкрементации 
parentPort.postMessage('increment');
// Эти сообщения используются для вызова функции modifyCounter, которая изменяет общий счетчик