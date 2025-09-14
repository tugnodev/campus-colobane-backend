import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { corsMiddleware } from './Infrastructure/http/middleware/cors.js'
import { auth } from './Infrastructure/config/auth.js';

const app = new Hono()

app.use("*", corsMiddleware);

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
