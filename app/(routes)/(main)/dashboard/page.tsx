import { redirect } from "next/navigation";

import { fetchPlaylistByTag } from "@/lib/actions/fetch-playlist-by-tag";
import { generateText } from "@/lib/ai/generate-text";
import getSession from "@/lib/get-session";

import { VideoCard } from "@/components/Video/video-card";

import prisma from "@/prisma/db";

export default async function DashboardPage() {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin");
    }

    const userData = await prisma.user.findFirst({
        where: {
            id: user.id,
        },
    });
    const skills = userData?.skills;

    const allTags = await generateText(
        "Generate 10 similar tags like the following: " +
            skills +
            ". Response should be comma separated for parsing",
    ).then((res: string) => res.split(","));

    return (
        <div className="mt-12 h-full w-full">
            <h1 className="text-2xl font-semibold">Top Courses</h1>
            <div className="grid w-fit grid-cols-3 gap-3">
                {allTags.map(async (tag, index) => {
                    const playlists = await fetchPlaylistByTag(tag);
                    if (playlists.id !== undefined)
                        return (
                            <VideoCard
                                key={index}
                                title={playlists.title}
                                cardChannel={playlists.owner}
                                image={playlists.thumbnail}
                                href={`/courses/${playlists.id}`}
                            />
                        );
                })}
            </div>
        </div>
    );
}
