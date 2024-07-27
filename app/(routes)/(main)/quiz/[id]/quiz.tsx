"use client";

import { useState } from "react";

import { redirect, usePathname, useRouter } from "next/navigation";

import { toast } from "sonner";

import { updatePoints } from "@/lib/actions/update-points";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { questions } from "./data";

export const Quiz = () => {
    const pathname = usePathname();
    const id = pathname.split("quiz/").pop();
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);

    const currentQuestionData = questions[currentQuestion];
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };
    const handleSubmit = () => {
        if (selectedOption === null) {
            toast.error("Please select an option");
            return;
        }

        if (selectedOption === currentQuestionData.correct) {
            setScore(score + 1);
        }
        setSelectedOption(null);
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleBack = () => {
        if (currentQuestion === 0) return;
        setCurrentQuestion(currentQuestion - 1);
    };

    const handleUpdateScore = (score: number, quizId: string) => {
        // Update the score in the database`
        updatePoints(score).then(() => {
            toast.success("Score updated successfully");
        });

        router.push(`/video/${quizId}`);
    };

    return (
        <div className="flex h-full flex-col items-center justify-center bg-background">
            <div className="w-full max-w-md border-x bg-card p-8">
                {currentQuestion < questions.length ? (
                    <>
                        <h2 className="mb-4 text-2xl font-bold">
                            {currentQuestionData.question}
                        </h2>
                        <Separator />
                        <div className="mt-4 grid grid-cols-2 gap-4">
                            {currentQuestionData.options.map((option) => (
                                <button
                                    key={option}
                                    className={`rounded-md bg-muted px-4 py-2 text-card-foreground transition-colors hover:bg-muted/80 ${
                                        selectedOption === option
                                            ? "bg-primary text-primary-foreground"
                                            : ""
                                    }`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <div>
                                <p>
                                    Question No: #{currentQuestion + 1}/
                                    {questions.length}
                                </p>
                            </div>
                            <div className="space-x-1">
                                <Button onClick={handleBack}>Back</Button>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <h2 className="mb-4 text-2xl font-bold">
                            Quiz Complete
                        </h2>
                        <p className="mb-4 text-lg">
                            Your score: {score} / {questions.length}
                        </p>
                        <div className="space-x-1">
                            <Button onClick={() => setCurrentQuestion(0)}>
                                Restart
                            </Button>
                            <Button
                                onClick={() => handleUpdateScore(score, id!)}
                            >
                                Finish
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
