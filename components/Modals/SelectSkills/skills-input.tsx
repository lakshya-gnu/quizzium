"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

import { Tag, TagInput } from "emblor";

import { updateSkills } from "@/lib/actions/update-skills";

type TestProp = {
    text: string;
};

export const SkillsInput = ({ skills }: { skills: any }) => {
    const session = useSession();

    const [tags, setTags] = useState<Tag[]>([]);
    const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

    const handleChange = (newTags: any) => {
        updateSkills(newTags, session?.data?.user?.id!);
    };

    return (
        <TagInput
            // {...field}
            placeholder="Enter a topic"
            tags={tags}
            setTags={(newTags) => {
                setTags(newTags);
                handleChange(tags);
                // setValue("topics", newTags as [Tag, ...Tag[]]);
            }}
            activeTagIndex={activeTagIndex}
            setActiveTagIndex={setActiveTagIndex}
        />
    );
};
