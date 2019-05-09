// const Hapi = require('@hapi/hapi');
//
// const init = async () => {
//
//     const port = process.env.PORT || 3000;
//
//     const server = Hapi.server({
//         port: port,
//         host: 'localhost'
//     });
//
//     server.route({
//         method: 'GET',
//         path:'/',
//         handler: (request, h) => {
//             return 'HAPI: AZURE: Hello World!';
//         }
//     });
//
//     await server.start();
//     console.log('Server running on %s', server.info.uri);
// };
//
// process.on('unhandledRejection', (err) => {
//
//     console.log(err);
//     process.exit(1);
//
// });
//
// init();


const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
