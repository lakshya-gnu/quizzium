import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "@/prisma/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
    theme: {
        logo: "/logo.png",
    },
    adapter: PrismaAdapter(prisma) as Adapter,
    callbacks: {
        session({ session, user }) {
            session.user.role = user.role;
            return session;
        },
    },
    providers: [
        Google,
        Resend({
            apiKey: process.env.AUTH_RESEND_KEY,
            from: "hello@lonewolf.rip",

            async generateVerificationToken() {
                return crypto.randomUUID();
            },
        }),
    ],
});
