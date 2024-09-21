import { fastify } from 'fastify'
import { Database } from './database.js'
import cors from '@fastify/cors'


const server = fastify();
const database = new Database;

server.register(cors, {
    origin: '*',
    methods: ['GET']
})


server.get('/', async () => {
    return await database.get();
})

server.post('/new-jogador', async (request) => {
    return await database.post(request.body);
})

server.put('/alter-user/:id', async (request) => {
    return await database.put(request.params.id, request.body);
})

server.delete('/delete-user/:id', async (request) => {
    return await database.delete(request.params.id);
})

server.listen({
    port: 3333
});