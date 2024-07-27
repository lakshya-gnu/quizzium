import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { signIn } from "@/auth";

export function SignIn() {
    return (
        <form
            action={async (formData) => {
                "use server";
                await signIn("resend", formData);
            }}
        >
            <Input type="text" name="email" placeholder="Email" />
            <Button type="submit">Signin with Resend</Button>
        </form>
    );
}
