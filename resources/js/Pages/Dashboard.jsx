import { AppSidebar } from "@/Components/AppSidebar"
import { Header } from "@/Components/Header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"


export default function Page() {
 return (
  <SidebarProvider>
   <AppSidebar variant="sidebar" />
   <SidebarInset>
    <Header title={"Dashboard"} />
    <div className="flex flex-1 flex-col">
     <div className="@container/main flex flex-1 flex-col gap-2">
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
       {/* <SectionCards /> */}
       <div className="px-4 lg:px-6">
        <h1>Dashboard</h1>
        {/* <ChartAreaInteractive /> */}
       </div>
      </div>
     </div>
    </div>
   </SidebarInset>
  </SidebarProvider>
 );
}
