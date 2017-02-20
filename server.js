/**
 * Created by khoa_pro on 2/20/17.
 */
'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, reply) {

        return reply('hello world');
    }
});

server.route({
    method: "GET",
    path: "/",
    handler: rootHandler
});

function rootHandler(request, reply) {

    return reply('Hello hapi');
}

// Start the server
server.start(function (err) {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});