"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { updateTags } from "@/lib/actions/update-tags";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import prisma from "@/prisma/db";

export function TagInput() {
    const session = useSession();
    const user = session.data.user;

    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTag = (tag) => {
        if (tag.trim() !== "") {
            setTags([...tags, tag.trim()]);
            setInputValue("");
        }
    };
    const removeTag = (index) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            addTag(inputValue);
        }
    };

    useEffect(() => {
        console.log(tags);
        updateTags(tags, user.id);

        console.log("Skills updated");
    }, [tags, user]);
    return (
        <div className="w-full max-w-md">
            <div className="relative flex items-center">
                <Input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add tags..."
                    className="pr-16"
                />
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-2"
                    onClick={() => addTag(inputValue)}
                >
                    <PlusIcon className="h-4 w-4" />
                    <span className="sr-only">Add tag</span>
                </Button>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className="flex items-center rounded-full bg-primary px-3 py-0.5 text-sm font-medium text-primary-foreground"
                    >
                        <span>{tag}</span>
                        <button
                            className="ml-2 text-primary-foreground/80"
                            onClick={() => removeTag(index)}
                        >
                            <XIcon className="h-4 w-4" />
                            <span className="sr-only">Remove tag</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}

function XIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
}
