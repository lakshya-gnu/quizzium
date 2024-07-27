import getSession from "@/lib/get-session";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { AddSkillsBtn } from "./add-skills-btn";
import { Mod } from "./mod";
import prisma from "@/prisma/db";

export default async function UserProfile() {
    const session = await getSession();
    const user = session?.user;

    const data = await prisma.user.findUnique({
        where: {
            id: user?.id,
        },
    });

    return (
        <div className="ml-20 mt-12 h-full w-full">
            <h1 className="mb-6 text-2xl font-bold">User Profile</h1>
            <div className="flex w-[80%] justify-between gap-2">
                <Card className="w-full">
                    <CardContent className="space-y-2">
                        <div className="h-6"></div>
                        <h3 className="text-lg font-medium">Name</h3>
                        <Input defaultValue={data?.name!} />
                        <h3 className="text-lg font-medium">Email</h3>
                        <Input defaultValue={data?.email!} />
                        <h3 className="text-lg font-medium">Role</h3>
                        <Input defaultValue={data?.role! || "User"} />
                        <h3 className="text-lg font-medium">Score</h3>
                        <Input defaultValue={data?.score!} />
                        <h3 className="text-lg font-medium">Skills</h3>
                        <div className="space-x-1">
                            {data?.skills.map((skill, index) => (
                                <Badge key={index}>{skill}</Badge>
                            ))}
                        </div>
                        <AddSkillsBtn />
                        <Mod />
                    </CardContent>
                </Card>
                <Card className="w-full">
                    <CardContent className="space-y-2">
                        <div className="h-6"></div>
                        <h3 className="text-lg font-medium">Top Badges</h3>
                        <div className="grid grid-cols-4 gap-x-1.5 gap-y-1">
                            <Badge className="flex items-center justify-center text-center">
                                Quick Run
                            </Badge>
                            <Badge className="flex items-center justify-center text-center">
                                Agile Developer
                            </Badge>
                            <Badge className="flex items-center justify-center text-center">
                                React Master
                            </Badge>
                            <Badge className="flex items-center justify-center text-center">
                                Quick Run
                            </Badge>
                            <Badge className="flex items-center justify-center text-center">
                                Agile Developer
                            </Badge>
                            <Badge className="flex items-center justify-center text-center">
                                React Master
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
