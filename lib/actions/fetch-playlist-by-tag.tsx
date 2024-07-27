import { extractTextsBetween } from "./extract-text-between";

export async function fetchPlaylistByTag(tag: string) {
    const search = await fetch(
        `https://www.youtube.com/results?search_query=${tag}`,
        { cache: "no-cache" },
    );

    const searchPageHtml = await search.text();

    const playlistId = extractTextsBetween(
        searchPageHtml,
        `/playlist?list=`,
        `"`,
    )[0];

    const playlistPage = await fetch(
        "https://www.youtube.com/playlist?list=" + playlistId,
        { cache: "no-cache" },
    );

    const playlistPageHtml = await playlistPage.text();

    const playlistTitle = extractTextsBetween(
        playlistPageHtml,
        `<title>`,
        ` - YouTube</title>`,
    )[0];

    const playlistOwner = extractTextsBetween(
        playlistPageHtml,
        `"ownerText":{"runs":[{"text":"`,
        `"`,
    )[0];

    const playlistThumbnail = extractTextsBetween(
        playlistPageHtml,
        `heroPlaylistThumbnailRenderer":{"thumbnail":{"thumbnails":[{"url":"`,
        `"`,
    )[0];

    const playlist = {
        id: playlistId,
        title: playlistTitle,
        owner: playlistOwner,
        thumbnail: playlistThumbnail,
    };

    return playlist;
}
