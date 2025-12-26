import {
 ArrowUpCircleIcon,
 BarChartIcon,
 FolderIcon,
 LayoutDashboardIcon,
 ListIcon,
 UsersIcon
} from "lucide-react"

import { NavMain } from "@/Components/NavMain"
import { NavUser } from "@/Components/NavUser"
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
 user: {
  name: "superadmin",
  email: "superadmin@gmail.com",
  avatar: "/avatars/shadcn.jpg",
 },
 navMain: [
  {
   title: "Dashboard",
   url: "/dashboard",
   icon: LayoutDashboardIcon,
  },
  {
   title: "Tasks",
   url: "/tasks",
   icon: ListIcon,
  },
  {
   title: "Employees",
   url: "/employees",
   icon: BarChartIcon,
  },
  {
   title: "Departments",
   url: "/departments",
   icon: FolderIcon,
  },
  {
   title: "Roles",
   url: "/roles",
   icon: UsersIcon,
  },
  {
   title: "Presences",
   url: "/presences",
   icon: UsersIcon,
  },
  {
   title: "Payrolls",
   url: "/payrolls",
   icon: UsersIcon,
  },
  {
   title: "Leave Request",
   url: "/leave-request",
   icon: UsersIcon,
  },
 ],
}

export function AppSidebar({
 ...props
}) {
 return (
  <Sidebar collapsible="icon" {...props}>
   <SidebarHeader>
    <SidebarMenu>
     <SidebarMenuItem>
      <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
       <a href="#">
        <ArrowUpCircleIcon className="h-5 w-5" />
        <span className="text-base font-semibold">HRIS.</span>
       </a>
      </SidebarMenuButton>
     </SidebarMenuItem>
    </SidebarMenu>
   </SidebarHeader>
   <SidebarContent>
    <NavMain items={data.navMain} />
   </SidebarContent>
   <SidebarFooter>
    <NavUser user={data.user} />
   </SidebarFooter>
  </Sidebar>
 );
}
