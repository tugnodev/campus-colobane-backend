import { cors } from 'hono/cors'

export const corsMiddleware = cors({
  origin: ['http://localhost:3000', "http://localhost:5173", "http://127.0.0.1:3000", "http://127.0.0.1:5173"],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['X-Custom-Header'],
  maxAge: 86400,
  credentials: true
})