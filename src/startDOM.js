const { JSDOM } = require('jsdom');

const { window } = new JSDOM(`<html>
  <body>
  <main id="app"></main>
  </body>
  </html>`, {
  url: 'http://localhost:3000',
});

global.window = window;
global.document = window.document;
global.XMLHttpRequest = window.XMLHttpRequest;
global.CustomEvent = window.CustomEvent;
global.DocumentFragment = window.DocumentFragment;
