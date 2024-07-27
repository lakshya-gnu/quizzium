import { redirect } from "next/navigation";

import getSession from "@/lib/get-session";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import prisma from "@/prisma/db";

export default async function Leaderboard() {
    const session = await getSession();
    const user = session?.user;

    if (!user) {
        redirect("/api/auth/signin");
    }

    const scores = await prisma.user.findMany({
        select: {
            name: true,
            score: true,
        },
        orderBy: {
            score: "desc",
        },
    });

    return (
        <div className="ml-20 mt-12 h-full w-full">
            <h1 className="mb-6 font-bold">Leaderboard</h1>
            <Table className="w-[45%] border">
                <TableHeader className="bg-neutral-100">
                    <TableRow>
                        <TableHead>Rank</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Score</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {scores.map((score, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{score.name}</TableCell>
                                <TableCell>{score.score}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}
