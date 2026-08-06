import type { Context, Next } from "hono";
import { auth } from "../../config/auth.js";



export const authMiddleware = async (c: Context, next: Next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  const path = c.req.path;
  if (path === "/user/login" || path === "/user/register") {
    return next();
  }
    if (!session) {
      return c.json({ message: "Unauthorized" }, 401);
    }
    c.set("user", session.user);
    c.set("session", session.session);
    return next();
}