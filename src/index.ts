import 'dotenv/config';
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { corsMiddleware } from './Infrastructure/http/middleware/cors.js'
import { auth } from './Infrastructure/config/auth.js';
import { userRoutes } from './Infrastructure/http/routes/market/user.js';

const app = new Hono()

app.use("*", corsMiddleware)
.use("*", logger())
.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.get("/", (c) => c.json({ message: "Hello Hono!" }));

app.route("/user", userRoutes);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
