"use client";

import { MoreVertical, ChevronLast, ChevronFirst, Crown } from "lucide-react";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

import { Session } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useIsMounted } from "usehooks-ts";

import { useSidebarIsExpanded } from "@/lib/hooks/use-sidebar-is-expanded";

import { Nav } from "./Nav/nav";
import { auth } from "@/auth";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Sidebar = ({ session }: { session: any }) => {
    // const session = useSession();
    // const user = session?.data?.user;
    const user = session.user;
    const [data, setData] = useState("loading");
    const points = user.score;

    const isMounted = useIsMounted();
    const [isVisible, setVisible] = useState<boolean>(false);

    const { isExpanded, setIsExpanded } = useSidebarIsExpanded();

    useEffect(() => {
        void delay(3000).then(() => {
            if (isMounted()) {
                setVisible(true);
            }
        });
    }, [isMounted]);

    return (
        <aside className="fixed top-0 h-screen">
            <nav className="flex h-full flex-col border-r bg-white shadow-sm">
                <div className="flex items-center justify-between p-4 pb-2">
                    <Image
                        width={150}
                        height={150}
                        src="/logoipsium.svg"
                        className={`overflow-hidden transition-all ${
                            isExpanded ? "w-32" : "w-0"
                        }`}
                        alt=""
                    />
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
                    >
                        {isExpanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>
                {isVisible && (
                    <>
                        <Nav />
                        <div className="flex w-full items-center justify-center py-4">
                            <Crown size={18} />
                            <span>{points}</span>
                        </div>
                    </>
                )}

                <div className="flex border-t p-3">
                    <Avatar>
                        <AvatarFallback>LS</AvatarFallback>
                        <AvatarImage src={user.image!} alt="User Image" />
                    </Avatar>
                    <div
                        className={`flex items-center justify-between overflow-hidden transition-all ${isExpanded ? "ml-3 w-52" : "w-0"} `}
                    >
                        <div className="space-x-1 leading-4">
                            <h4 className="font-semibold">{user.name}</h4>
                            <span className="text-xs text-gray-600">
                                {/* {user.email} */}
                                {user.email}
                            </span>
                        </div>
                        <MoreVertical size={20} />
                    </div>
                </div>
            </nav>
        </aside>
    );
};

interface SidebarItemProps {
    icon: string;
    text: string;
    active?: boolean;
    alert?: boolean;
}

export function SidebarItem({ icon, text, active, alert }: SidebarItemProps) {
    const { isExpanded, setIsExpanded } = useSidebarIsExpanded();

    return (
        <li
            className={`group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors ${
                active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "text-gray-600 hover:bg-indigo-50"
            } `}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ${
                    isExpanded ? "ml-3 w-52" : "w-0"
                }`}
            >
                {text}
            </span>
            {alert && (
                <div
                    className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${
                        isExpanded ? "" : "top-2"
                    }`}
                />
            )}

            {!isExpanded && (
                <div
                    className={`invisible absolute left-full ml-6 -translate-x-3 rounded-md bg-indigo-100 px-2 py-1 text-sm text-indigo-800 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
                >
                    {text}
                </div>
            )}
        </li>
    );
}
