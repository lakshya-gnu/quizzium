import {
    Compass,
    LayoutDashboard,
    LucideAlignEndVertical,
    PlayCircle,
    Rotate3DIcon,
    User2Icon,
} from "lucide-react";

export const navItems = [
    {
        id: 1,
        name: "Dashboard",
        Icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        id: 2,
        name: "Explore",
        Icon: Compass,
        href: "/explore",
    },
    { id: 4, name: "Roadmap", Icon: Rotate3DIcon, href: "/roadmap" },
    {
        id: 4,
        name: "Leaderboard",
        Icon: LucideAlignEndVertical,
        href: "/leaderboard",
    },
    {
        id: 5,
        name: "User",
        Icon: User2Icon,
        href: "/user",
    },
];
