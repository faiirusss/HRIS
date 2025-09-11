import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Header } from "@/Layouts/Header";

const TasksPage = () => {
    return (
        <AuthenticatedLayout>
            <Header></Header>
            <main className="w-full px-4 py-6 mx-auto max-w-7xl">
                <div className="flex items-center justify-between mb-2 space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
                </div>
            </main>
        </AuthenticatedLayout>
    );
};

export default TasksPage;
