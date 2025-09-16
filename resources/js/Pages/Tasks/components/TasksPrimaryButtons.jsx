import { Badge } from "@/Components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/Components/ui/separator";
import {
    Calendar,
    Circle,
    CircleUserRound,
    Download,
    Ellipsis,
    ListTodo,
    Tag,
} from "lucide-react";

const TasksPrimaryButtons = () => {
    // const { setOpen } = useTasks();
    return (
        <div className="flex gap-2">
            <Button
                variant=""
                className="space-x-1"
                onClick={() => setOpen("import")}
            >
                <span>Import</span> <Download size={18} />
            </Button>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="destructive">Create</Button>
                </DialogTrigger>
                <DialogTitle>{""}</DialogTitle>
                <DialogContent className="sm:max-w-3xl">
                    <DialogHeader className="p-4">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <Badge
                                        variant="outline"
                                        className="flex items-center justify-center gap-1 py-1 text-foreground/50"
                                    >
                                        <ListTodo size={12} />
                                        TASKS
                                    </Badge>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="text-sm font-normal text-foreground/90">
                                    New task
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <DialogDescription>{""}</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col justify-between h-40 px-4">
                        <div className="">
                            <form action="" className="flex flex-col">
                                <input
                                    type="text"
                                    placeholder="Issue title"
                                    className="bg-transparent border-0 outline-none active:ring-0 focus:ring-0 placeholder:text-foreground/30 placeholder:font-medium placeholder:text-lg"
                                />
                                <input
                                    type="text"
                                    placeholder="Add description..."
                                    className="bg-transparent border-0 outline-none active:ring-0 focus:ring-0 placeholder:text-foreground/30"
                                />
                            </form>
                        </div>
                        <div className="flex gap-1.5 pb-3">
                            <Badge
                                variant="outline"
                                className="flex items-center gap-1 px-3.5 py-1 text-sm font-normal text-foreground/80 bg-foreground/5 hover:text-foreground/100"
                            >
                                <Circle size={16} />
                                Todo
                            </Badge>
                            <Badge
                                variant="outline"
                                className="flex items-center gap-1 text-sm font-normal text-foreground/80 bg-foreground/5 hover:text-foreground/100"
                            >
                                <Ellipsis size={16} />
                                Priority
                            </Badge>
                            <Badge
                                variant="outline"
                                className="flex items-center gap-1 text-sm font-normal text-foreground/80 bg-foreground/5 hover:text-foreground/100"
                            >
                                <CircleUserRound size={16} />
                                Assignee
                            </Badge>
                            <Badge
                                variant="outline"
                                className="flex items-center gap-1 text-sm font-normal text-foreground/80 bg-foreground/5"
                            >
                                <Tag size={16} />
                            </Badge>
                            <Badge
                                variant="outline"
                                className="flex items-center gap-1 text-sm font-normal text-foreground/80 bg-foreground/5"
                            >
                                <Calendar size={16} />
                            </Badge>
                        </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-end p-4">
                        <Button
                            size="sm"
                            variant="destructive"
                            className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-foreground/80"
                        >
                            Create task
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default TasksPrimaryButtons;
