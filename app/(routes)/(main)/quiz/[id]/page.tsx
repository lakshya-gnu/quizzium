import { generateText } from "@/lib/ai/generate-text";
import getSession from "@/lib/get-session";

import { Quiz } from "./quiz";
import prisma from "@/prisma/db";

export default async function Page({ params }: { params: { id: string } }) {
    const session = await getSession();
    const videoId = params.id;

    // const userData = await prisma.user.findFirst({
    //     where: {
    //         id: session?.user?.id,
    //     },
    // });
    // const skills = userData?.skills;

    return (
        <div className="mx-auto mt-12 flex w-full max-w-[80vw] flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">AI-generated Quiz</h1>
            <p>Video ID: {videoId}</p>
            <Quiz />
        </div>
    );
}

const a = [
    {
        category: "math",
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: "4",
    },
    {
        category: "history",
        question: "Who was the first president of the United States?",
        options: [
            "George Washington",
            "Abraham Lincoln",
            "Thomas Jefferson",
            "James Madison",
        ],
        correct: "George Washington",
    },
    {
        category: "science",
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Cu", "Fe"],
        correct: "Au",
    },
    {
        category: "geography",
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        correct: "Paris",
    },
    {
        category: "sports",
        question: "Who is the all-time leading scorer in NBA history?",
        options: [
            "Michael Jordan",
            "LeBron James",
            "Kareem Abdul-Jabbar",
            "Wilt Chamberlain",
        ],
        correct: "Kareem Abdul-Jabbar",
    },
    {
        category: "entertainment",
        question: "Who directed the movie Titanic?",
        options: [
            "Steven Spielberg",
            "James Cameron",
            "Christopher Nolan",
            "Quentin Tarantino",
        ],
        correct: "James Cameron",
    },
    {
        category: "technology",
        question: "What is the name of the first computer virus?",
        options: ["Trojan Horse", "Melissa", "ILOVEYOU", "WannaCry"],
        correct: "Trojan Horse",
    },
    {
        category: "food",
        question: "What is the main ingredient in a pizza?",
        options: ["Bread", "Cheese", "Tomato sauce", "Pepperoni"],
        correct: "Bread",
    },
    {
        category: "animals",
        question: "What is the only mammal that can fly?",
        options: ["Bat", "Bird", "Squirrel", "Cat"],
        correct: "Bat",
    },
    {
        category: "art",
        question: "Who painted the Mona Lisa?",
        options: [
            "Leonardo da Vinci",
            "Vincent van Gogh",
            "Pablo Picasso",
            "Claude Monet",
        ],
        correct: "Leonardo da Vinci",
    },
];
