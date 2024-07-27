"use client";

import { set } from "date-fns";

import { getSkillsModalState } from "@/lib/hooks/get-skills-modal-state";

import { Modal } from "@/components/Modals/SelectSkills/modal";
import { Button } from "@/components/ui/button";

export const AddSkillsBtn = () => {
    const { isOpen, setIsOpen } = getSkillsModalState();

    return (
        <Button
            onClick={() => {
                console.log("clicked");
                setIsOpen(true);
            }}
            size={"sm"}
            variant={"outline"}
        >
            Add Skills
        </Button>
    );
};
