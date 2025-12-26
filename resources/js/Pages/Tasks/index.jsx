import { DataTable } from "@/Components/data-table";
import { Header } from "@/Components/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Card } from "@/Components/ui/card";

const TasksPage = ({ tasks }) => {

 return (
  <AuthenticatedLayout>
   <Header title={"Tasks"} />
   <div className="flex flex-1 flex-col">
    <div className="@container/main flex flex-1 flex-col gap-2">
     <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      {/* <SectionCards /> */}
      <div className="px-4 lg:px-6">
       <Card className="py-4 lg:py-6">
        <h3 className="px-4 lg:px-6 pb-4">All Tasks</h3>
        <DataTable data={tasks} />
       </Card>
      </div>

     </div>
    </div>
   </div>
  </AuthenticatedLayout >
 );
};

export default TasksPage;
