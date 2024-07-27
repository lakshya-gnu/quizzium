"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/prisma/db";

export const updateSkills = async (newSkills: any, userId: string) => {
    console.log(newSkills);

    await prisma.user.update({
        data: {
            skills: newSkills.text,
        },
        where: {
            id: userId,
        },
    });

    revalidatePath("/dashboard");
};
