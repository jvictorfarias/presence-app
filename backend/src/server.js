import app from './app';

const server = app.server.listen(process.env.APP_PORT);
app.io.listen(server);
