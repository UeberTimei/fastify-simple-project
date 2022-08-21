const fastify = require("fastify")({logger: true});
const PORT = 5000;

fastify.register(require('@fastify/swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' },
    }
})
fastify.register(require('./routes/items'))



const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (e) {
        fastify.log.error(e);
        process.exit(1);
    }
}

start();
