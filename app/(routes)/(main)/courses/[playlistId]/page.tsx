import { redirect } from "next/navigation";

import { fetchPlaylistVideosById } from "@/lib/actions/fetch-playlist-videos-by-id";
import { generateText } from "@/lib/ai/generate-text";
import getSession from "@/lib/get-session";

import { VideoCard } from "@/components/Video/video-card";

import prisma from "@/prisma/db";

export default async function Page({
    params,
}: {
    params: { playlistId: string };
}) {
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

    const playlistId = params.playlistId;
    const videos = await fetchPlaylistVideosById(playlistId);

    return (
        <div>
            {videos.map((video, index) => (
                <VideoCard
                    key={index}
                    title={video.title}
                    cardChannel={video.owner}
                    image={video.thumbnail}
                    href={`/video/${video.id}`}
                />
            ))}
        </div>
    );
}
