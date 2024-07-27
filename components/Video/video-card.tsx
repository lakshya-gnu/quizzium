import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "../ui/card";

export const VideoCard = ({
    title,
    image,
    href,
    cardChannel,
}: {
    title: string;
    image: string;
    href: string;
    cardChannel: string;
}) => {
    return (
        <Card className="mt-10 w-[360px]">
            <Link href={href}>
                <Image
                    src={image}
                    alt="v1"
                    width={500}
                    height={500}
                    className="rounded-lg"
                />
                <div className="space-y-2 p-3">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{cardChannel}</CardDescription>
                </div>
            </Link>
        </Card>
    );
};
