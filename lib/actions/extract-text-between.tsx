export function extractTextsBetween(
    bigString: string,
    string1: string,
    string2: string,
) {
    // Escape special characters in string1 and string2
    const escapeRegExp = (str: string) =>
        str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // Create a regular expression to match text between string1 and string2
    const pattern = new RegExp(
        escapeRegExp(string1) + "(.*?)" + escapeRegExp(string2),
        "gs", // 'g' for global search, 's' for dot to match newline
    );

    // Extract all matches
    const matches = [...bigString.matchAll(pattern)].map((match) => match[1]);

    return matches;
}
