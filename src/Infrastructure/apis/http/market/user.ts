import { Context, Hono } from "hono";
import { UserController } from "../../../controllers/userController.js";
import { UserUseCase } from "../../../../Application/usecases/userUseCase.js";
import { UserRepoImpl } from "../../../../Infrastructure/repositories/userRepoImpl.js";
import { validateJson } from "../../../middleware/valideSchema.js";
import { createUserSchema,userLoginSchema,updateUserSchema,turnToVendorSchema } from "../../../config/schema/index.js";

const userRepository = new UserRepoImpl();
export const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

const userRoutes = new Hono();

userRoutes.post("/register", validateJson(createUserSchema), async (c) => {
  const userData = c.req.valid("json");
  const result = await userController.createUser(userData);
  return c.json(result);
});

userRoutes.post("/login", validateJson(userLoginSchema), async (c) => {
  const loginData = c.req.valid("json");
  const result = await userController.userLogin(loginData);
  return c.json(result);
});

userRoutes.patch("/update", validateJson(updateUserSchema), async (c) => {
  const updateData = c.req.valid("json");
  const result = await userController.updateUser(updateData);
  return c.json(result);
});

userRoutes.patch("/update/vendor", validateJson(turnToVendorSchema), async (c) => {
  const vendorData = c.req.valid("json");
  const result = await userController.turnToVendor(vendorData);
  return c.json(result);
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

userRoutes.get("/:id", async (c) => {
  return userController.getUserById(c);
});

userRoutes.get("/stats/:id", async (c) => {
  return userController.getStats(c);
});

userRoutes.delete("/user/delete/:id", async (c) => {
  const id = c.req.param("id");
  const result = await userController.deleteUser(id);
  return c.json(result);
});
export { userRoutes };
