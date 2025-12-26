import {
 flexRender,
 getCoreRowModel,
 getFacetedRowModel,
 getFacetedUniqueValues,
 getFilteredRowModel,
 getPaginationRowModel,
 getSortedRowModel,
 useReactTable,
} from "@tanstack/react-table";
import {
 CheckCircle2Icon,
 ChevronDownIcon,
 ChevronLeftIcon,
 ChevronRightIcon,
 ChevronsLeftIcon,
 ChevronsRightIcon,
 ColumnsIcon,
 LoaderIcon,
 MoreVerticalIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
 DropdownMenu,
 DropdownMenuCheckboxItem,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableRow,
} from "@/components/ui/table";
import {
 Tabs,
 TabsContent
} from "@/components/ui/tabs";
import { Link } from "@inertiajs/react";
import { IconCirclePlus } from "@tabler/icons-react";
import { useState } from "react";

const columns = [
 {
  accessorKey: "title",
  header: "Title",
  cell: ({ row }) => {
   return <TableCellViewer item={row.original} />;
  },
  enableHiding: false,
 },
 {
  accessorKey: "description",
  header: "Description",
  cell: ({ row }) => (
   <div className="max-w-md truncate">
    {row.original.description}
   </div>
  ),
 },
 {
  accessorKey: "status",
  header: "Status",
  cell: ({ row }) => (
   <Badge
    variant="outline"
    className="gap-1 px-1.5 text-muted-foreground [&_svg]:size-3">
    {row.original.status === "Done" || row.original.status === "Completed" ? (
     <CheckCircle2Icon className="text-green-500 dark:text-green-400" />
    ) : (
     <LoaderIcon />
    )}
    {row.original.status}
   </Badge>
  ),
 },
 {
  accessorKey: "assigned_to",
  header: "Assigned To",
  cell: ({ row }) => {
   return row.original.employee?.fullname || "Unassigned"
  },
 },
 {
  accessorKey: "due_date",
  header: "Due Date",
  cell: ({ row }) => {
   if (!row.original.due_date) return "No due date"
   const date = new Date(row.original.due_date)
   const day = date.getDate().toString().padStart(2, '0')
   const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   const month = monthNames[date.getMonth()]
   const year = date.getFullYear()
   return `${day}-${month}-${year}`
  },
 },
 {
  id: "actions",
  cell: () => (
   <DropdownMenu>
    <DropdownMenuTrigger asChild>
     <Button
      variant="ghost"
      className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
      size="icon">
      <MoreVerticalIcon />
      <span className="sr-only">Open menu</span>
     </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-32">
     <DropdownMenuItem>Edit</DropdownMenuItem>
     <DropdownMenuSeparator />
     <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
   </DropdownMenu>
  ),
 },
]

export function DataTable({
 data: initialData
}) {
 const [data] = useState(() => initialData)
 const [columnVisibility, setColumnVisibility] =
  useState({})
 const [columnFilters, setColumnFilters] = useState([])
 const [sorting, setSorting] = useState([])
 const [pagination, setPagination] = useState({
  pageIndex: 0,
  pageSize: 10,
 })

 const table = useReactTable({
  data,
  columns,
  state: {
   sorting,
   columnVisibility,
   columnFilters,
   pagination,
  },
  getRowId: (row) => row.id.toString(),
  onSortingChange: setSorting,
  onColumnFiltersChange: setColumnFilters,
  onColumnVisibilityChange: setColumnVisibility,
  onPaginationChange: setPagination,
  getCoreRowModel: getCoreRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFacetedRowModel: getFacetedRowModel(),
  getFacetedUniqueValues: getFacetedUniqueValues(),
 })

 return (
  <Tabs
   defaultValue="outline"
   className="flex w-full flex-col justify-start gap-6">
   <div className="flex items-center justify-between px-4 lg:px-6">
    <div className="flex items-center gap-2 justify-end w-full">
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Button variant="outline" size="sm">
        <ColumnsIcon />
        <span className="hidden lg:inline">Customize Columns</span>
        <span className="lg:hidden">Columns</span>
        <ChevronDownIcon />
       </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
       {table
        .getAllColumns()
        .filter((column) =>
         typeof column.accessorFn !== "undefined" &&
         column.getCanHide())
        .map((column) => {
         return (
          <DropdownMenuCheckboxItem
           key={column.id}
           className="capitalize"
           checked={column.getIsVisible()}
           onCheckedChange={(value) =>
            column.toggleVisibility(!!value)
           }>
           {column.id}
          </DropdownMenuCheckboxItem>
         );
        })}
      </DropdownMenuContent>
     </DropdownMenu>
     <Button variant="outline" size="sm">
      <Link className="flex gap-1" href="/tasks/create">
       <IconCirclePlus />
       <span className="hidden lg:inline">Create</span>
      </Link>
     </Button>
    </div>
   </div>
   <TabsContent
    value="outline"
    className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6">
    <div className="overflow-hidden rounded-lg border">
     <Table>
      <TableHeader className="sticky top-0 z-10 bg-muted">
       {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
         {headerGroup.headers.map((header) => {
          return (
           <TableHead key={header.id} colSpan={header.colSpan} className="pl-4">
            {header.isPlaceholder
             ? null
             : flexRender(header.column.columnDef.header, header.getContext())}
           </TableHead>
          );
         })}
        </TableRow>
       ))}
      </TableHeader>
      <TableBody>
       {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
         <TableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
           <TableCell key={cell.id} className="pl-4">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
           </TableCell>
          ))}
         </TableRow>
        ))
       ) : (
        <TableRow>
         <TableCell colSpan={columns.length} className="h-24 text-center">
          No results.
         </TableCell>
        </TableRow>
       )}
      </TableBody>
     </Table>
    </div>
    <div className="flex items-center justify-between">
     {/* show item per page */}
     <div className="hidden items-center gap-2 lg:flex">
      <Label htmlFor="rows-per-page" className="text-sm font-medium">
       Rows per page
      </Label>
      <Select
       value={`${table.getState().pagination.pageSize}`}
       onValueChange={(value) => {
        table.setPageSize(Number(value))
       }}>
       <SelectTrigger className="w-20" id="rows-per-page">
        <SelectValue placeholder={table.getState().pagination.pageSize} />
       </SelectTrigger>
       <SelectContent side="top">
        {[10, 20, 50, 100].map((pageSize) => (
         <SelectItem key={pageSize} value={`${pageSize}`}>
          {pageSize}
         </SelectItem>
        ))}
       </SelectContent>
      </Select>
     </div>
     {/* get count of page */}
     <div className="flex w-fit items-center justify-center text-sm font-medium">
      Page {table.getState().pagination.pageIndex + 1} of{" "}
      {table.getPageCount()}
     </div>
     {/* button navigator */}
     <div className="ml-auto flex items-center gap-2 lg:ml-0">
      <Button
       variant="outline"
       className="hidden h-8 w-8 p-0 lg:flex"
       onClick={() => table.setPageIndex(0)}
       disabled={!table.getCanPreviousPage()}>
       <span className="sr-only">Go to first page</span>
       <ChevronsLeftIcon />
      </Button>
      <Button
       variant="outline"
       className="size-8"
       size="icon"
       onClick={() => table.previousPage()}
       disabled={!table.getCanPreviousPage()}>
       <span className="sr-only">Go to previous page</span>
       <ChevronLeftIcon />
      </Button>
      <Button
       variant="outline"
       className="size-8"
       size="icon"
       onClick={() => table.nextPage()}
       disabled={!table.getCanNextPage()}>
       <span className="sr-only">Go to next page</span>
       <ChevronRightIcon />
      </Button>
      <Button
       variant="outline"
       className="hidden size-8 lg:flex"
       size="icon"
       onClick={() => table.setPageIndex(table.getPageCount() - 1)}
       disabled={!table.getCanNextPage()}>
       <span className="sr-only">Go to last page</span>
       <ChevronsRightIcon />
      </Button>
     </div>
    </div>
   </TabsContent>
  </Tabs>
 );
}

function TableCellViewer({
 item
}) {

 return (
  <p className="w-fit px-0 text-left text-foreground">
   {item.title}
  </p>
 );
}
