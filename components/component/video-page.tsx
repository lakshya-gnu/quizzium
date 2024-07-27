"use client";

import React, { useEffect } from "react";
import ReactPlayer from "react-player";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";

interface VideoPageProps {
    id: string;
    title: string;
    owner: string;
    description: string;
}

export function VideoPage({ id, title, owner, description }: VideoPageProps) {
    const [url, setUrl] = React.useState("");
    useEffect(() => {
        setUrl(`https://www.youtube.com/watch?v=${id}`);
    }, [url, id]);

    return (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[2fr_1fr]">
            <div className="grid gap-4">
                <div className="aspect-video overflow-hidden">
                    <ReactPlayer url={url} playing controls />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div>{owner}</div>
                    </div>
                </div>
                <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-sm font-medium">
                        <span>Description</span>
                        <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="prose text-muted-foreground">
                        <p>
                            {description
                                .split("\n")
                                .map((line: string, index: number) => {
                                    return (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    );
                                })}
                        </p>
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <Link href={`/quiz/${id}`}>
                        <Button>Go to Quiz</Button>
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-muted"
                    >
                        <ThumbsUpIcon className="h-5 w-5" />
                        <span className="sr-only">Like</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-muted"
                    >
                        <PlusIcon className="h-5 w-5" />
                        <span className="sr-only">Add to list</span>
                    </Button>
                </div>
                <div className="text-sm text-muted-foreground">
                    <span className="font-medium">1.2M</span> likes
                </div>
                <div className="flex flex-1 flex-col gap-4">
                    <h2 className="text-lg font-bold">Related Videos</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-[120px] shrink-0 overflow-hidden rounded-lg">
                                <Image
                                    src="/placeholder.svg"
                                    alt="Thumbnail"
                                    width={120}
                                    height={90}
                                    className="aspect-video object-cover"
                                />
                            </div>
                            <div className="flex flex-1 flex-col gap-1">
                                <div className="line-clamp-2 font-medium">
                                    Blender Fundamentals: Modeling a Low Poly
                                    Landscape
                                </div>
                                <div className="line-clamp-1 text-sm text-muted-foreground">
                                    Blender Foundation
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[120px] shrink-0 overflow-hidden rounded-lg">
                                <Image
                                    src="/placeholder.svg"
                                    alt="Thumbnail"
                                    width={120}
                                    height={90}
                                    className="aspect-video object-cover"
                                />
                            </div>
                            <div className="flex flex-1 flex-col gap-1">
                                <div className="line-clamp-2 font-medium">
                                    Blender 2.8 Beginner Tutorial - Part 1
                                </div>
                                <div className="line-clamp-1 text-sm text-muted-foreground">
                                    Blender Guru
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[120px] shrink-0 overflow-hidden rounded-lg">
                                <Image
                                    src="/placeholder.svg"
                                    alt="Thumbnail"
                                    width={120}
                                    height={90}
                                    className="aspect-video object-cover"
                                />
                            </div>
                            <div className="flex flex-1 flex-col gap-1">
                                <div className="line-clamp-2 font-medium">
                                    Blender Timelapse - Modeling a Low Poly City
                                </div>
                                <div className="line-clamp-1 text-sm text-muted-foreground">
                                    CG Geek
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChevronDownIcon(props: { className: string }) {
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
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

function PlusIcon(props: { className: string }) {
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

function ThumbsUpIcon(props: { className: string }) {
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
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
    );
}

function XIcon(props: { className: string }) {
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
