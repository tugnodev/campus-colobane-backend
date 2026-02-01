import type { Context } from "hono";
import type { RoomUseCase } from "../../../Application/usecases/roomUseCase.js";
import type {
  createRoomDto,
  updateRoomDto,
  deleteRoomDto,
} from "../../../Application/dtos/room.js";

export class RoomController {
  constructor(private readonly roomUseCase: RoomUseCase) {}

  async createRoom(ctx: Context) {
    const data: createRoomDto = await ctx.req.json<createRoomDto>();
    const res = await this.roomUseCase.createRoom(data);
    switch (typeof res) {
      case "string":
        ctx.status(400);
        return { error: res };
      case "object":
        ctx.status(201);
        return { data: res };
    }
  }

  async updateRoom(ctx: Context) {
    const data: updateRoomDto = await ctx.req.json<updateRoomDto>();
    const res = await this.roomUseCase.updateRoom(data);
    switch (typeof res) {
      case "string":
        ctx.status(400);
        return { error: res };
      case "object":
        ctx.status(200);
        return { data: res };
    }
  }

  async deleteRoom(ctx: Context) {
    const data: deleteRoomDto = await ctx.req.json<deleteRoomDto>();
    const res = await this.roomUseCase.deleteRoom(data);
    switch (typeof res) {
      case "string":
        ctx.status(400);
        return { error: res };
      case "object":
        ctx.status(200);
        return { data: res };
    }
  }

  async getRoomById(ctx: Context) {
    const id = ctx.req.param("id");
    const res = await this.roomUseCase.getRoomById(id);
    switch (typeof res) {
      case "string":
        ctx.status(400);
        return { error: res };
      case "object":
        ctx.status(200);
        return { data: res };
    }
  }

  async getAllRooms(ctx: Context) {
    const res = await this.roomUseCase.getAllRooms();
    switch (typeof res) {
      case "string":
        ctx.status(400);
        return { error: res };
      case "object":
        ctx.status(200);
        return { data: res };
    }
  }
}
