import { cors } from 'hono/cors'

export const corsMiddleware = cors({
  origin: ['http://localhost:3000', 'https://mon-site.com'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['X-Custom-Header'],
  maxAge: 86400,
  credentials: true
})