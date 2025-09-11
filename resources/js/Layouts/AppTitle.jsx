import { Button } from "@/Components/ui/button";
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/Components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react";

export function AppTitle() {
    const { setOpenMobile } = useSidebar();
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="gap-0 py-0 hover:bg-transparent active:bg-transparent"
                    asChild
                >
                    <div>
                        <Link
                            to="/"
                            onClick={() => setOpenMobile(false)}
                            className="grid flex-1 text-2xl leading-tight text-start"
                        >
                            <span className="font-bold truncate">HRIS</span>
                        </Link>
                        {/* <ToggleSidebar /> */}
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}

function ToggleSidebar({ className, onClick, ...props }) {
    const { toggleSidebar } = useSidebar();

    return (
        <Button
            data-sidebar="trigger"
            data-slot="sidebar-trigger"
            variant="ghost"
            size="icon"
            className={cn("aspect-square size-8 max-md:scale-125", className)}
            onClick={(event) => {
                onClick?.(event);
                toggleSidebar();
            }}
            {...props}
        >
            <X className="md:hidden" />
            <Menu className="max-md:hidden" />
            <span className="sr-only">Toggle Sidebar</span>
        </Button>
    );
}
