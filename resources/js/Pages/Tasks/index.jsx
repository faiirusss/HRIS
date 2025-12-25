import { ThemeSwitch } from "@/Components/ThemeSwitch";
import { Button } from "@/Components/ui/button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Header } from "@/Layouts/Header";

import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";

import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuLabel,
 DropdownMenuRadioGroup,
 DropdownMenuRadioItem,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
 AlarmClock,
 Ellipsis,
 Loader,
 Logs,
 TextAlignStart,
 UsersRound,
} from "lucide-react";
import { useState } from "react";
import TasksPrimaryButtons from "./components/TasksPrimaryButtons";
import { Link, router } from "@inertiajs/react";

const TasksPage = ({ tasks }) => {
 // const [tasks, setTasks] = useState([])

 console.log(tasks)
 const [position, setPosition] = useState("bottom");

 return (
  <AuthenticatedLayout>
   <Header fixed>
    <h1>Tasks</h1>
    <div className="flex items-center space-x-4 ms-auto">
     <ThemeSwitch />
    </div>
   </Header>
   <main className="w-full px-4 py-6 mx-auto max-w-7xl">
    <div className="flex flex-wrap items-center justify-between mb-2 space-y-2 gap-x-4">
     <div>
      <h2 className="text-2xl font-bold tracking-tight">
       Tasks
      </h2>
      <p className="text-muted-foreground">
       Here&apos;s a list of your tasks for this month!
      </p>
     </div>
     <Link href={'/tasks/create'}><Button>Create</Button></Link>
     {/* <TasksPrimaryButtons /> */}
    </div>
    <div className="flex-1 px-4 py-1 -mx-4 overflow-auto lg:flex-row lg:space-y-0 lg:space-x-12">
     <div className="border rounded-md ">
      <Table>
       <TableHeader>
        <TableRow>
         <TableHead>
          <div className="flex items-center gap-2">
           <Logs size={16} />
           Task
          </div>
         </TableHead>
         <TableHead>
          <div className="flex items-center gap-2">
           <TextAlignStart size={16} />
           Description
          </div>
         </TableHead>
         <TableHead>
          <div className="flex items-center gap-2">
           <UsersRound size={16} />
           Assigned To
          </div>
         </TableHead>
         <TableHead>
          <div className="flex items-center gap-2">
           <AlarmClock size={16} />
           Due Date
          </div>
         </TableHead>
         <TableHead>
          <div className="flex items-center gap-2">
           <Loader size={16} />
           Status
          </div>
         </TableHead>
        </TableRow>
       </TableHeader>
       <TableBody>
        {tasks.map((task) => (
         <TableRow key={task.id}>
          <TableCell className="font-medium max-w-20">
           {task.title}
          </TableCell>
          <TableCell className="truncate max-w-60">
           {task.description}
          </TableCell>
          <TableCell>
           {task.employee?.fullname}
          </TableCell>
          <TableCell>{task.due_date}</TableCell>
          <TableCell>{task.status}</TableCell>
          <TableCell className="">
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
             <Button
              variant="ghost"
              size="icon"
             >
              <Ellipsis />
             </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-28">
             <DropdownMenuLabel>
              Action
             </DropdownMenuLabel>
             <DropdownMenuSeparator />
             <DropdownMenuRadioGroup
              value={position}
              onValueChange={
               setPosition
              }
             >
              <DropdownMenuRadioItem value="top">
               Top
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
               Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">
               Right
              </DropdownMenuRadioItem>
             </DropdownMenuRadioGroup>
            </DropdownMenuContent>
           </DropdownMenu>
          </TableCell>
         </TableRow>
        ))}
       </TableBody>
      </Table>
     </div>
    </div>
   </main>
  </AuthenticatedLayout>
 );
};

export default TasksPage;
