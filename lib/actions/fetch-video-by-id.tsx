import { extractTextsBetween } from "./extract-text-between";

interface Video {
    id: string;
    title: string;
    owner: string;
    description: string;
}

export async function fetchVideoById(id: string) {
    const playlist = await fetch("https://www.youtube.com/watch?v=" + id, {
        cache: "no-cache",
    });

    const playlistHtml = await playlist.text();

    const videoTitle = extractTextsBetween(
        playlistHtml,
        `<title>`,
        ` - YouTube</title>`,
    )[0];

    const videoOwner = extractTextsBetween(
        playlistHtml,
        `"ownerChannelName":"`,
        `"`,
    )[0];

    const videoDescription = extractTextsBetween(
        playlistHtml,
        `"},"description":{"simpleText":"`,
        `"},"`,
    )[0].replace(/\\n/g, "\n");

    const video: Video = {
        id: id,
        title: videoTitle,
        owner: videoOwner,
        description: videoDescription,
    };

    console.log(video);

    return video;
}
