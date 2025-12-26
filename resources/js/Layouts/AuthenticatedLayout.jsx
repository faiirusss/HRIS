import { AppSidebar } from "@/Components/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/Components/ui/sidebar";

export default function AuthenticatedLayout({ children }) {
 console.log(children)
 return (
  <SidebarProvider>
   <AppSidebar />
   <SidebarInset>{children}</SidebarInset>
  </SidebarProvider>
 );
}
