import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

export default function AuthenticatedLayout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}
