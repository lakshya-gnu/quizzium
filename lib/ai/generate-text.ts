export async function generateText(prompt: string) {
    const GOOGLE_API_KEY = "AIzaSyCzXjixaZqY-AjM_7Po0_5lq7e8RRx_ovo"; // Replace with your actual API key
    const url =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
        GOOGLE_API_KEY;
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: prompt,
                        },
                    ],
                },
            ],
        }),
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error("Failed to fetch");
        }
        const data = await response.json();
        console.log(await data);
        return await data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error(error);
    }
}
