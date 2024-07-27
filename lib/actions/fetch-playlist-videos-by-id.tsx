import { extractTextsBetween } from "./extract-text-between";

export async function fetchPlaylistVideosById(id: string) {
    const playlist = await fetch(
        "https://www.youtube.com/playlist?list=" + id,
        { cache: "no-cache" },
    );

    const playlistHtml = await playlist.text();

    const videoIds = extractTextsBetween(
        playlistHtml,
        `{"playlistVideoRenderer":{"videoId":"`,
        `"`,
    );

    const videoTitles = extractTextsBetween(
        playlistHtml,
        `188}]},"title":{"runs":[{"text":"`,
        `"}],"accessibility":{"`,
    );

    const videoOwners = extractTextsBetween(
        playlistHtml,
        `"shortBylineText":{"runs":[{"text":"`,
        `"`,
    );

    const videoThumbnails = extractTextsBetween(
        playlistHtml,
        `138},{"url":"`,
        `","width":336,"height":188}]},"title"`,
    );

    const videos = [];

    for (let i = 0; i < videoIds.length; i++) {
        videos.push({
            id: videoIds[i],
            title: videoTitles[i],
            owner: videoOwners[i],
            thumbnail: videoThumbnails[i],
        });
    }

    return videos;
}
