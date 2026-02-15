import { UserUseCase } from "../../../Application/usecases/userUseCase.js";
import type {
  createUserDto,
  turnToVendorDto,
  updateUserDto,
  userLoginDto,
} from "../../../Application/dtos/user.js";
import type { Context } from "hono";
import { auth } from "../../config/auth.js";

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
          return ctx.json(result);
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
    const result = await auth.api.signOut({ headers: ctx.req.raw.headers });
    if (typeof result === "string") {
      return ctx.json({ message: "User Not Found" });
    }
    return ctx.json(result);
  }

  async turnToVendor(ctx: Context) {
    const userData: turnToVendorDto = await ctx.req.json();
    const result = await this.userUseCase.turnToVendor(userData);
    if (typeof result === "string") {
      return ctx.json({ message: "User Not Found" });
    }
    return ctx.json(result);
  }
}
