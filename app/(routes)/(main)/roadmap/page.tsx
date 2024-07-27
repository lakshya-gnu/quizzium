import { redirect } from "next/navigation";

import { fetchPlaylistByTag } from "@/lib/actions/fetch-playlist-by-tag";
import { generateText } from "@/lib/ai/generate-text";
import getSession from "@/lib/get-session";

import { VideoCard } from "@/components/Video/video-card";

import prisma from "@/prisma/db";

export default async function RoadmapPage() {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin");
    }

    return <div>Roadmap</div>;
}
