import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { corsMiddleware } from './Infrastructure/http/middleware/cors.js'
import { authMiddleware } from './Infrastructure/http/middleware/auth.js';
import { userRoutes } from './Infrastructure/http/routes/market/user.js';
import { chatRoutes } from './Infrastructure/http/routes/market/chat.js';
import { cartRoutes } from './Infrastructure/http/routes/market/cart.js';
const app = new Hono()

app.use("*", corsMiddleware)
app.use("/api/auth/*", authMiddleware);
app.use("*", logger());

app.get("/", (c) => c.json({ message: "Hello Hono!" }));

app.route("/user", userRoutes);
app.route("/chat", chatRoutes);
app.route("/cart", cartRoutes);

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

serve(
  fetch: app.fetch,
  port: port,
}, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
