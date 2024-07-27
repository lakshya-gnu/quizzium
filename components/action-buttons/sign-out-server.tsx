import { Button } from "../ui/button";

import { signOut } from "@/auth";

export function SignOutServer() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <Button type="submit">Sign Out</Button>
        </form>
    );
}
