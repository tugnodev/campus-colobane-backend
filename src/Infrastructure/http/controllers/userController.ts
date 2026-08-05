import { UserUseCase } from "../../../Application/usecases/userUseCase.js";
import type {
  createUserDto,
  turnToVendorDto,
  updateUserDto,
  userLoginDto,
} from "../../../Application/dtos/user.js";
import type { Context } from "hono";
import { auth } from "../../config/auth.js";
import type { User } from "better-auth";

export class UserController {
  private userUseCase: UserUseCase;

  constructor(userUseCase: UserUseCase) {
    this.userUseCase = userUseCase;
  }

  async createUser(ctx: Context) {
    const userData: createUserDto = await ctx.req.json();
    const result = await this.userUseCase.createUser(userData);
    return ctx.json(result);
  }

  async updateUser(ctx: Context) {
    const userData: updateUserDto = await ctx.req.json();
    const result = await this.userUseCase.updateUser(userData);
    if (typeof result === "string") {
      return ctx.json({ message: "User Not Found" });
    }
    return ctx.json(result);
  }

  async deleteUser(ctx: Context) {
    const { id } = await ctx.req.json();
    const result = await this.userUseCase.deleteUser(id);
    if (typeof result === "string") {
      return ctx.json({ message: "User Not Found" });
    }
    return ctx.json(result);
  }

  async getUserBySession(ctx: Context) {
    const session = await auth.api.getSession({
      headers: ctx.req.raw.headers,
    });

    console.log(session);
    if (!session) {
      ctx.redirect("/auth/login");
      return ctx.json("Session Not Found");
    }
    const usr = session!.user as User;
    console.log(JSON.stringify(usr.id));
    const result = await this.userUseCase.getUserById(usr.id);
    if (typeof result === "string") {
      return ctx.json({ message: "User Not Found" });
    }
    console.log(JSON.stringify(result));
    return ctx.json(result);
  }

  async getUserById(ctx: Context) {
    const id = ctx.req.param("id");
    const result = await this.userUseCase.getUserById(id);
    if (typeof result === "string") {
      return ctx.json({ message: "User Not Found" });
    }
    return ctx.json(result);
  }

  async userLogin(ctx: Context) {
    try {
      const userData: userLoginDto = await ctx.req.json();
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
    } catch (error) {
      return ctx.json({ message: "Invalid Credentials" });
    }
  }

  async getAllUsers(ctx: Context) {
    console.log(ctx.body);
    const result = await this.userUseCase.getAllUsers();
    if (typeof result === "string") {
      return ctx.json({ message: "Error while fetching users" });
    }
    return ctx.json(result);
  }

  async userLogout(ctx: Context) {
    auth.handler(ctx.req.raw);
    const result = await auth.api.signOut({ headers: ctx.req.raw.headers });
    console.log(result);
    return ctx.json(result);
  }

  async turnToVendor(ctx: Context) {
    const userData: turnToVendorDto = await ctx.req.json();
    const result = await this.userUseCase.turnToVendor(userData);
    if (typeof result === "string") {
      return ctx.text("Error credentials");
    }
    return ctx.json(result);
  }

  async getStats(ctx: Context) {
    const userId = ctx.req.param("id") as string;
    const result = await this.userUseCase.getStats(userId);
    if (typeof result === "string") {
      return ctx.json({ message: result });
    }
    return ctx.json(result);
  }
}
