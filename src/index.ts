import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { corsMiddleware } from './middleware/cors.js'

const app = new Hono()

app.use("*", corsMiddleware);

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
