import { cors } from "hono/cors";
export const corsMiddleware = cors({
    origin: ["http://10.223.12.103:1420/", "http://localhost:1420"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["X-Custom-Header"],
    maxAge: 86400,
    credentials: true,
});
