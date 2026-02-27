import { Hono } from "hono";
import { UserController } from "../../controllers/userController.js";
import { UserUseCase } from "../../../../Application/usecases/userUseCase.js";
import { UserRepoImpl } from "../../../../Infrastructure/repositories/userRepoImpl.js";
import { auth } from "../../../config/auth.js";

const userRepository = new UserRepoImpl();
export const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

const userRoutes = new Hono();

userRoutes.post("/register", async (c) => {
  return userController.createUser(c);
});

userRoutes.post("/login", async (c) => {
  return userController.userLogin(c);
});

userRoutes.post("/logout", async (c) => {
  return userController.userLogout(c);
});

userRoutes.get("/all", async (c) => {
  return userController.getAllUsers(c);
});

userRoutes.get("/session", async (c) => {
  return userController.getUserBySession(c);
});

userRoutes.get("/", async (c) => {
  return userController.getUserById(c);
});

userRoutes.get("/stats", async (c) => {
  return userController.getStats(c);
});

userRoutes.patch("/update", async (c) => {
  return userController.updateUser(c);
});

userRoutes.patch("/update/vendor", async (c) => {
  return userController.turnToVendor(c);
});

userRoutes.delete("/user/delete", async (c) => {
  return userController.deleteUser(c);
});

export { userRoutes };
