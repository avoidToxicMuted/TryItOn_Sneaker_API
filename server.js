const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(require('./sneakerdb.js')());
// const router =jsonServer.router('pumadb.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
// server.use(pumaRouter);

server.listen(port);