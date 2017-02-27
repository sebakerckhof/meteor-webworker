import './main.html';

var publicWorker = new Worker('/worker.js');

var packageWorker = new Worker('/packages/foo_bar/worker.js');