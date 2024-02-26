import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';
import http from 'http';

const prisma = new PrismaClient();

const server = http.createServer();
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', async (socket) => {
  console.log(`Socket ${socket.id} connected`);

  events.init(io);

  io.on('disconnect', () => {
    console.log(`Socket ${socket.id} disconnected`);
  })
});

server.listen(8080, () => {
  console.log(`Server listening on port 8080`);
});

export const events = {
  async init(io: Server) {
    await prisma.$queryRaw`select count(*)::integer as total, st_operacion as status from tb_operacion_salida tos group by st_operacion`.then((data) => {
      io.emit('init', data);
    });
  }
}
