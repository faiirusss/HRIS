import InputLabel from "@/Components/InputLabel"
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select"
import {
 Popover,
 PopoverContent,
 PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/Components/ui/separator"
import { Textarea } from "@/Components/ui/textarea"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Link, router } from "@inertiajs/react"
import { useState } from "react"
import { ChevronDownIcon, CircleDashed, Loader } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import { Header } from "@/Layouts/Header"
import axios from "axios"
import { toast } from "sonner"

const STATUS_TASK = [
 { name: "Pending", icon: CircleDashed },
 { name: "On going", icon: Loader },
]

const CreateTaskPage = (props) => {
 const { employees } = props
 const [open, setOpen] = useState(false)

 const {
  register,
  handleSubmit,
  reset,
  control,
  formState: { errors, isSubmitting }
 } = useForm(
  {
   defaultValue: {
    title: "",
    description: "",
    assigned_to: "",
    status: "",
    due_date: "",
   }
  }
 )

 const onSubmit = async (data) => {
  const formattedDate = data.due_date
   ? new Date(data.due_date).toISOString().split('T')[0]
   : null

  try {
   toast.loading("Creating task...", { id: "create-task" })

   router.post(
    '/tasks',
    {
     title: data.title,
     description: data.description,
     assigned_to: Number(data.assigned_to),
     status: data.status,
     due_date: formattedDate,
    },
    {
     onSuccess: () => {
      toast.success("Task created successfully!", {
       id: "create-task",
      })
      reset()
     },
     onError: (errors) => {
      toast.error(
       errors.general ??
       "Failed to create task!",
       { id: "create-task" }
      )
     },
    }
   )
  } catch (err) {
   console.error(err)
   toast.error("Unexpected error", { id: "create-task" })
  }
 }

 return (
  <AuthenticatedLayout>
   <Header fixed>
    <h1>Task</h1>
   </Header>

   <main className="w-full px-4 py-6 mx-auto max-w-5xl">
    <Card className="my-5">
     <CardHeader>
      <CardTitle>Create New Task</CardTitle>
     </CardHeader>
     <form onSubmit={handleSubmit(onSubmit)}>
      <CardContent>
       <div className="space-y-4 py-4">
        <div className="space-y-2">
         <InputLabel>Task Title</InputLabel>
         <Input
          type="text"
          placeholder="Input task title"
          {...register("title", {
           required: "Task title is required",
          })}
         />
        </div>
        <div className="space-y-2">
         <InputLabel>Description</InputLabel>
         <Textarea
          placeholder="Type your message here."
          rows={3}
          {...register("description")}
         />
        </div>
        <div className="space-y-2">
         <InputLabel>Select Employee</InputLabel>
         <Controller
          name="assigned_to"
          control={control}
          render={({ field }) => (
           <Select
            value={field.value ?? ""}
            onValueChange={field.onChange}
           >
            <SelectTrigger>
             <SelectValue placeholder="Select Employee" />
            </SelectTrigger>
            <SelectContent>
             {employees.map((employee, i) => (
              <SelectItem
               key={i}
               value={employee.id.toString()}
              >
               {employee.fullname}
              </SelectItem>
             ))}
            </SelectContent>
           </Select>
          )}
         />
        </div>
        <div className="w-full flex gap-4">
         <div className="space-y-2 w-full">
          <InputLabel>Status</InputLabel>
          <Controller
           name="status"
           control={control}
           render={({ field }) => (
            <Select
             value={field.value ?? ""}
             onValueChange={field.onChange}
            >
             <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Status" />
             </SelectTrigger>
             <SelectContent>
              {STATUS_TASK.map((status, i) => (
               <SelectItem value={status.name} key={i}>
                <div className="flex gap-1 items-center">
                 <status.icon size={14} />
                 {status.name}
                </div>
               </SelectItem>
              ))}
             </SelectContent>
            </Select>
           )}
          />
         </div>
         <div className="space-y-2 w-full">
          <InputLabel>Deadline</InputLabel>
          <Controller
           name="due_date"
           control={control}
           render={({ field }) => (
            <Popover open={open} onOpenChange={setOpen}>
             <PopoverTrigger asChild>
              <Button
               variant="outline"
               id="date"
               className="w-full justify-between font-normal"
              >
               {field.value ? new Date(field.value).toLocaleDateString() : "Select date"}
               <ChevronDownIcon />
              </Button>
             </PopoverTrigger>
             <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <Calendar
               mode="single"
               selected={field.value ? new Date(field.value) : undefined}
               captionLayout="dropdown"
               onSelect={(date) => {
                field.onChange(date ? date.toISOString() : "")
                setOpen(false)
               }}
              />
             </PopoverContent>
            </Popover>
           )}
          />
         </div>
        </div>
       </div>
      </CardContent>
      <Separator />
      <CardFooter>
       <div className="flex gap-2 justify-end items-center w-full">
        <Link href={"/tasks"}>
         <Button>Cancel</Button>
        </Link>
        <Button type="submit">Submit</Button>
       </div>
      </CardFooter>
     </form>
    </Card>
   </main>
  </AuthenticatedLayout >

 )
}

export default CreateTaskPage
