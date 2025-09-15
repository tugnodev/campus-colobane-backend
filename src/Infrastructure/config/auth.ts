import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../../generated/prisma/client.js";
import { openAPI } from "better-auth/plugins";

export const prisma = new PrismaClient();
export const auth = betterAuth({
    appName: "Campus Colobane",
    secret: process.env.BETTER_AUTH_SECRET!,
    baseURL: process.env.BETTER_AUTH_URL!,
    origin: process.env.BETTER_AUTH_URL!,
    trustedOrigins: [
        process.env.BETTER_AUTH_URL!
    ],
    cookies: {
        secure: true,
        sameSite: "strict",
        httpOnly: true
    },
    database: prismaAdapter(prisma, {
        provider: "postgresql"
    }),
    emailAndPassword: {
        enabled: true,
        maxPasswordLength: 32,
        minPasswordLength: 8,
    },
    plugins: [openAPI()],
    advanced: {
        cookiePrefix : "campus-colobane",
        cookieSecure : process.env.NODE_ENV === "production",
    }
});