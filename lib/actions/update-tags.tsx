"use server";

import prisma from "@/prisma/db";

export async function updateTags(tags: any, userId: string) {
    try {
        await prisma.user.update({
            data: {
                skills: {
                    push: tags,
                },
            },
            where: {
                id: userId,
            },
        });
    } catch (error) {
        console.log("Error: ", error);
    }
}
