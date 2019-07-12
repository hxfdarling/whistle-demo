const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

const MAX_AGE = 1000 * 60 * 5;

exports.uiServer = (server, { storage, config: { port } }) => {
  const app = new Koa();
  app.proxy = true;
  app.use(serve(path.join(__dirname, '../public'), MAX_AGE));
  server.on('request', app.callback());
};
