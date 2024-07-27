"use client";

import { getSkillsModalState } from "@/lib/hooks/get-skills-modal-state";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { TagInput } from "./tag-input";

export const Mod = () => {
    const { isOpen, setIsOpen } = getSkillsModalState();
    return (
        <Dialog open={isOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Select your Skills</DialogTitle>
                    <DialogDescription>
                        {`Add your relevant skills to help us match you with the right opportunities.`}
                        <br />
                    </DialogDescription>
                </DialogHeader>
                <TagInput />
                {/* <SkillsInput skills={skills} /> */}
                {/* <SkillsForm /> */}
            </DialogContent>
        </Dialog>
    );
};
