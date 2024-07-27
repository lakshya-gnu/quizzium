import Link from "next/link";
import { redirect } from "next/navigation";

import getSession from "@/lib/get-session";

import { SignOutServer } from "@/components/action-buttons/sign-out-server";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
    const session = await getSession();
    const user = session?.user;

    return (
        <div className="min-w-screen inset-0 mx-auto flex h-full min-h-screen w-full items-center justify-center">
            {user ? (
                <div className="flex flex-col items-center justify-center gap-2">
                    <Link href={"/dashboard"}>
                        <Button>Go to Dashboard</Button>
                    </Link>
                    <SignOutServer />
                </div>
            ) : (
                <Link href={"/api/auth/signin"}>
                    <Button>Sigin</Button>
                </Link>
            )}
        </div>
    );
}
