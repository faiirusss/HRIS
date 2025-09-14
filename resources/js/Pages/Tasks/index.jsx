import { ThemeSwitch } from "@/Components/ThemeSwitch";
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

const TasksPage = () => {
    return (
        <AuthenticatedLayout>
            <Header fixed>
                <h1>testing</h1>
                <div className="flex items-center space-x-4 ms-auto">
                    <ThemeSwitch />
                </div>
            </Header>
            <main className="w-full px-4 py-6 mx-auto max-w-7xl">
                <div className="flex items-center justify-between mb-2 space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
                </div>
                <div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">
                                    Invoice
                                </TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead className="text-right">
                                    Amount
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">
                                    INV001
                                </TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Credit Card</TableCell>
                                <TableCell className="text-right">
                                    $250.00
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </main>
        </AuthenticatedLayout>
    );
};

export default TasksPage;
