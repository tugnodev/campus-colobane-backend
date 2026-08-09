import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../../db/index.js";
import { bearer } from "better-auth/plugins";
import * as schema from '../../db/schema.js'

export const auth = betterAuth({
  appName: "Campus Colobane",
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL!,
  origin: process.env.BETTER_AUTH_URL!,
  trustedOrigins: [process.env.BETTER_AUTH_URL!],
  cookies: {
    secure: true,
    sameSite: "strict",
    httpOnly: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema
  }),
  emailAndPassword: {
    enabled: true,
    maxPasswordLength: 32,
    minPasswordLength: 8,
  },
  plugins: [bearer()],
  advanced: {
    cookiePrefix: "campus-colobane",
    cookieSecure: process.env.NODE_ENV === "production",
  },
});
