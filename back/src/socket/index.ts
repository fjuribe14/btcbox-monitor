import http from "http";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { config } from "dotenv";
import { Server, Socket } from "socket.io";

import { events } from "../events";
import routes from "../routes";

//
config();
export const app = express();

//
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//
Object.values(routes).forEach((r) => app.use("/", r));

//
export const server = http.createServer(app);
export const io = new Server(server);

//
io.on("connection", async (socket: Socket) => {
  events.connected(socket);
  events.init(io);
  events.disconnected(socket);
});
