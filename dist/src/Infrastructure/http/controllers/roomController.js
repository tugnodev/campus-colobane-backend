export class RoomController {
    roomUseCase;
    constructor(roomUseCase) {
        this.roomUseCase = roomUseCase;
    }
    async createRoom(ctx) {
        const data = await ctx.req.json();
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
    async updateRoom(ctx) {
        const data = await ctx.req.json();
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
    async deleteRoom(ctx) {
        const data = await ctx.req.json();
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
    async getRoomById(ctx) {
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
    async getAllRooms(ctx) {
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
