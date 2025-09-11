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
                    url: "/dashboard",
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
                    url: "/departments",
                    icon: ShieldHalf,
                },
                {
                    title: "Roles",
                    url: "/roles",
                    icon: KeyRound,
                },
                {
                    title: "Presences",
                    url: "/presences",
                    icon: CalendarCheck,
                },
                {
                    title: "Payrolls",
                    url: "/payrolls",
                    icon: DollarSign,
                },
                {
                    title: "Leave Requests",
                    url: "/leave-requests",
                    icon: SquareArrowOutUpLeft,
                },
            ],
        },
    ],
};
