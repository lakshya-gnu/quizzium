"use server";

import getSession from "../get-session";

import prisma from "@/prisma/db";

export async function updatePoints(n: number) {
    const session = await getSession();

    const user = session?.user;

    try {
        const data = await prisma.user.findFirst({
            where: {
                id: user?.id,
            },
        });
        console.log(data);

        const current = data?.score;

        try {
            if (current !== undefined) {
                await prisma.user.update({
                    data: {
                        score: current + n,
                    },
                    where: {
                        id: user?.id,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    } catch (error) {
        console.error(error);
    }
}
