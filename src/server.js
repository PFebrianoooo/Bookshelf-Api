const hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = hapi.Server({
    port: 9000,
    host: 'localhost'
  });


  server.route(routes);
  await server.start();

  console.log(`Server running on ${server.info.uri}`);

};

init();