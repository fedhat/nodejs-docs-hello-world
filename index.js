const Hapi = require('@hapi/hapi');

const init = async () => {

    const port = process.env.PORT || 3000;
    // const host = process.env.HOST || 'localhost';

    // const server = Hapi.server({
    //     port: port,
    //     host: host
    // });

    // ON AZURE don't pass in the host b/c it won't work, but you won't know why. YAY!
    const server = Hapi.server({
        port: port
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {
            return 'HAPI: AZURE: Hello World!';
        }
    });

    server.route({
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {

            const name = request.params.name ? encodeURIComponent(request.params.name) : 'stranger';
            const location = request.query.location ? request.query.location : 'unspecified location';
            return `Hello ${name}, from ${location}`;
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);

});

init();


// const http = require('http');
//
// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");
// });
//
// const port = process.env.PORT || 1337;
// server.listen(port);
//
// console.log("Server running at http://localhost:%d", port);
