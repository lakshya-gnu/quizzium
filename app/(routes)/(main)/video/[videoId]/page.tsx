import { redirect } from "next/navigation";

import { fetchPlaylistVideosById } from "@/lib/actions/fetch-playlist-videos-by-id";
import { fetchVideoById } from "@/lib/actions/fetch-video-by-id";
import { generateText } from "@/lib/ai/generate-text";
import getSession from "@/lib/get-session";

import { VideoCard } from "@/components/Video/video-card";
import { VideoPage } from "@/components/component/video-page";

import prisma from "@/prisma/db";

export default async function Page({
    params,
}: {
    params: { videoId: string };
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

    const video = await fetchVideoById(params.videoId);

    return (
        <VideoPage
            id={video.id}
            title={video.title}
            owner={video.owner}
            description={video.description}
        />
    );
}
