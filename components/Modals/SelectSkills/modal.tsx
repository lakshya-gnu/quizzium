import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { SkillsForm } from "./skills-form";
import { SkillsInput } from "./skills-input";
import { TagInput } from "./tag-input";

export const Modal = ({ skills }: { skills?: string[] }) => {
    return (
        <Dialog defaultOpen>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Select your Skills</DialogTitle>
                    <DialogDescription>
                        {`Add your relevant skills to help us match you with the right opportunities.`}
                        <br />
                        <span>{skills}</span>
                    </DialogDescription>
                </DialogHeader>
                <TagInput />
                {/* <SkillsInput skills={skills} /> */}
                {/* <SkillsForm /> */}
            </DialogContent>
        </Dialog>
    );
};
