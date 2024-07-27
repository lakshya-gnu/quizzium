import { redirect } from "next/navigation";

import getSession from "@/lib/get-session";

import { Modal } from "./modal";
import prisma from "@/prisma/db";

export const SelectSkills = async () => {
    const session = await getSession();
    const user = session?.user;

    // const { isOpen, setIsOpen } = getSkillsModalState();

    if (!user) {
        redirect("/api/auth/signin");
    }

    const data = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
    });

    const skills: string[] = data?.skills!;

    if (skills?.length === 0) {
        return <Modal skills={skills!} />;
    }

    return null;
};
