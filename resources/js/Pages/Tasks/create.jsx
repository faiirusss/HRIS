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
import { Separator } from "@/Components/ui/separator"
import { Textarea } from "@/Components/ui/textarea"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { Link } from "@inertiajs/react"

const CreateTaskPage = () => {
    return (
        <AuthenticatedLayout>
            <div><h1>task create</h1></div>

            <main className="w-full px-4 py-6 mx-auto max-w-5xl">
                <h1>Create new task</h1>

                <Card className="my-5">
                    <CardHeader>
                        <CardTitle>Task Title</CardTitle>
                        <Input type="text" placeholder="Input task title" />
                        <CardTitle>Description</CardTitle>
                        <Textarea placeholder="Type your message here." />
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <Separator />
                    <CardFooter>
                        <div className="flex gap-2 justify-end items-center w-full">
                            <Link href={"/tasks"}>
                                <Button>Cancel</Button>
                            </Link>
                            <Button>Submit</Button>
                        </div>
                    </CardFooter>
                </Card>
            </main>
        </AuthenticatedLayout>

    )
}

export default CreateTaskPage
