import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSidebarIsExpanded } from "@/lib/hooks/use-sidebar-is-expanded";
import { cn } from "@/lib/utils";

import { navItems } from "./nav-items";

export const Nav = () => {
    const pathname = usePathname();
    const { isExpanded, setIsExpanded } = useSidebarIsExpanded();

    return (
        <ul className="flex-1 px-3">
            {navItems.map((item, index) => {
                const { href, id, Icon, name } = item;

                return (
                    <Link href={href} key={item.id}>
                        <li
                            className={cn(
                                "group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors",
                                pathname === href
                                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                                    : "text-gray-600 hover:bg-indigo-50",
                            )}
                        >
                            <Icon />
                            <span
                                className={cn(
                                    "overflow-hidden transition-all",
                                    isExpanded ? "ml-3 w-52" : "w-0",
                                )}
                            >
                                {name}
                            </span>
                            {!isExpanded && (
                                <div
                                    className={`invisible absolute left-full ml-6 -translate-x-3 rounded-md bg-indigo-100 px-2 py-1 text-sm text-indigo-800 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
                                >
                                    {name}
                                </div>
                            )}
                        </li>
                    </Link>
                );
            })}
        </ul>
    );
};
