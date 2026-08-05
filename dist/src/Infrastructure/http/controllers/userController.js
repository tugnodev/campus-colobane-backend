import { UserUseCase } from "../../../Application/usecases/userUseCase.js";
import { auth } from "../../config/auth.js";
export class UserController {
    userUseCase;
    constructor(userUseCase) {
        this.userUseCase = userUseCase;
    }
    async createUser(ctx) {
        const userData = await ctx.req.json();
        const result = await this.userUseCase.createUser(userData);
        return ctx.json(result);
    }
    async updateUser(ctx) {
        const userData = await ctx.req.json();
        const result = await this.userUseCase.updateUser(userData);
        if (typeof result === "string") {
            return ctx.json({ message: "User Not Found" });
        }
        return ctx.json(result);
    }
    async deleteUser(ctx) {
        const { id } = await ctx.req.json();
        const result = await this.userUseCase.deleteUser(id);
        if (typeof result === "string") {
            return ctx.json({ message: "User Not Found" });
        }
        return ctx.json(result);
    }
    async getUserBySession(ctx) {
        const session = await auth.api.getSession({
            headers: ctx.req.raw.headers,
        });
        console.log(session);
        if (!session) {
            ctx.redirect("/auth/login");
            return ctx.json("Session Not Found");
        }
        const usr = session.user;
        console.log(JSON.stringify(usr.id));
        const result = await this.userUseCase.getUserById(usr.id);
        if (typeof result === "string") {
            return ctx.json({ message: "User Not Found" });
        }
        console.log(JSON.stringify(result));
        return ctx.json(result);
    }
    async getUserById(ctx) {
        const id = ctx.req.param("id");
        const result = await this.userUseCase.getUserById(id);
        if (typeof result === "string") {
            return ctx.json({ message: "User Not Found" });
        }
        return ctx.json(result);
    }
    async userLogin(ctx) {
        try {
            const userData = await ctx.req.json();
            const result = await auth.api.signInEmail({ body: userData });
            if (typeof result === "string") {
                return ctx.json({ message: "User Not Found" });
            }
            const user = await this.userUseCase.getUserById(result.user.id);
            switch (typeof user) {
                case "string":
                    return ctx.json({ message: "User Not Found" });
                case "object":
                    result.user = user;
                    return ctx.json({
                        token: result.token,
                        user: result.user,
                    });
                default:
                    return ctx.json({ message: "Unknown Error" });
            }
        }
        catch (error) {
            return ctx.json({ message: "Invalid Credentials" });
        }
    }
    async getAllUsers(ctx) {
        console.log(ctx.body);
        const result = await this.userUseCase.getAllUsers();
        if (typeof result === "string") {
            return ctx.json({ message: "Error while fetching users" });
        }
        return ctx.json(result);
    }
    async userLogout(ctx) {
        auth.handler(ctx.req.raw);
        const result = await auth.api.signOut({ headers: ctx.req.raw.headers });
        console.log(result);
        return ctx.json(result);
    }
    async turnToVendor(ctx) {
        const userData = await ctx.req.json();
        const result = await this.userUseCase.turnToVendor(userData);
        if (typeof result === "string") {
            return ctx.text("Error credentials");
        }
        return ctx.json(result);
    }
    async getStats(ctx) {
        const userId = ctx.req.param("id");
        const result = await this.userUseCase.getStats(userId);
        if (typeof result === "string") {
            return ctx.json({ message: result });
        }
        return ctx.json(result);
    }
}
