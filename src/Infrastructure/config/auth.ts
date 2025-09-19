import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "../../generated/prisma/client.js";
import { Resend } from "resend";
import { openAPI } from "better-auth/plugins";
import { emailTemplate } from "../services/emailTemplate.js";

const resend = new Resend(process.env.RESEND_KEY!);

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
    emailVerification: {
        sendOnSignUp: true,
        sendVerificationEmail: async ({ user, url}) => {
            const html = 
            await resend.emails.send({
                to: user.email!,
                from: "Campus Colobane <onboarding@campus-colobane.com>",
                subject: "Verify your email address",
                html: emailTemplate(user.name,user.email,url)
            });
        },
        autoSignInAfterVerification: true,
    },
    emailAndPassword: {
        enabled: true,
        maxPasswordLength: 32,
        minPasswordLength: 8
    },
    plugins: [openAPI()],
    advanced: {
        cookiePrefix : "campus-colobane",
        cookieSecure : process.env.NODE_ENV === "production",
    }
});