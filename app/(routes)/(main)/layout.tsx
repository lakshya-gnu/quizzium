import getSession from "@/lib/get-session";
import { useSidebarIsExpanded } from "@/lib/hooks/use-sidebar-is-expanded";

import { SelectSkills } from "@/components/Modals/SelectSkills/select-skills";
import { Sidebar } from "@/components/Sidebar/sidebar";

export default async function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getSession();

    return (
        <div className="flex">
            <SelectSkills />
            <Sidebar session={session} />
            <main className="ml-32 h-full w-full">{children}</main>
        </div>
    );
}
