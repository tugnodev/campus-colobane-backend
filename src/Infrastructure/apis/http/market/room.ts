import { RoomController } from "../../../controllers/roomController.js";
import { RoomUseCase } from "../../../../Application/usecases/roomUseCase.js";
import { RoomRepositoryImpl } from "../../../repositories/roomRepoImpl.js";

import { Hono } from "hono";
import { validateJson } from "../../../middleware/valideSchema.js";
import { createRoomSchema, updateRoomSchema } from "../../../config/schema/roomSchema.js";

const roomRepo = new RoomRepositoryImpl();
const roomUseCase = new RoomUseCase(roomRepo);
const roomController = new RoomController(roomUseCase);

const roomRouts = new Hono();

roomRouts.get("/", async (c) => {
  const rooms = await roomController.getAllRooms(c);
  return c.json(rooms);
});

roomRouts.post("/", validateJson(createRoomSchema), async (c) => {
  const room = await roomController.createRoom(c);
  return c.json(room);
});

roomRouts.put("/:id", validateJson(updateRoomSchema), async (c) => {
  const room = await roomController.updateRoom(c);
  return c.json(room);
});

roomRouts.delete("/:id", async (c) => {
  const room = await roomController.deleteRoom(c);
  return c.json(room);
});

roomRouts.get("/:id", async (c) => {
  const room = await roomController.getRoomById(c);
  return c.json(room);
});


export { roomRouts };
