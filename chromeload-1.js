// 'use strict';

// // Reload client for Chrome Apps & Extensions.
// // The reload client has a compatibility with livereload.

// var LIVERELOAD_HOST = 'localhost:';
// var LIVERELOAD_PORT = 357130;
// var connection = new WebSocket('ws://' + LIVERELOAD_HOST + LIVERELOAD_PORT + '/livereload');

// connection.onopen = function(event) {
//   var hello = {
//     command: 'hello',
//     protocols: ['http://livereload.com/protocols/official-5']
//   };

//   connection.send(JSON.stringify(hello));
// };

// connection.onerror = function (error) {
//   console.log('reload connection got error:', error);
// };

// connection.onmessage = function (e) {
//   if (e.data) {
//     var data = JSON.parse(e.data);
//     if (data && data.command === 'reload') {
//       extension.runtime.reload();
//     }
//   }
// };

window.LiveReloadOptions = { host: 'localhost' };
