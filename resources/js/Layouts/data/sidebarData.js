import {
    CalendarCheck,
    DollarSign,
    KeyRound,
    LayoutDashboard,
    ListTodo,
    ShieldHalf,
    SquareArrowOutUpLeft,
    Users,
} from "lucide-react";

export const sidebarData = {
    user: {
        name: "satnaing",
        email: "satnaingdev@gmail.com",
    },
    navGroups: [
        {
            title: "Menu",
            items: [
                {
                    title: "Dashboard",
                    url: "/",
                    icon: LayoutDashboard,
                },
                {
                    title: "Tasks",
                    url: "/tasks",
                    icon: ListTodo,
                },
                {
                    title: "Employees",
                    url: "/employees",
                    icon: Users,
                },
                {
                    title: "Departments",
                    url: "/chats",
                    icon: ShieldHalf,
                },
                {
                    title: "Roles",
                    url: "/chats",
                    icon: KeyRound,
                },
                {
                    title: "Presences",
                    url: "/chats",
                    icon: CalendarCheck,
                },
                {
                    title: "Payrolls",
                    url: "/chats",
                    icon: DollarSign,
                },
                {
                    title: "Leave Requests",
                    url: "/chats",
                    icon: SquareArrowOutUpLeft,
                },
            ],
        },
    ],
};
