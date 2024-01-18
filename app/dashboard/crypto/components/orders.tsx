"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const data: CryptoOrder[]= [
    {
        id: "co1",
        symbol: "BTC",
        amount: 0.5,
        orderType: "buy",
        status: "completed",
        price: 35000,
        walletAddress: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    },
    {
        id: "co2",
        symbol: "ETH",
        amount: 3,
        orderType: "sell",
        status: "pending",
        price: 2500,
        walletAddress: "0x4e6fefdc4fA42eC402EbCd575e2392b42a1744E7",
    },
    {
        id: "co3",
        symbol: "XRP",
        amount: 1000,
        orderType: "buy",
        status: "failed",
        price: 0.75,
        walletAddress: "rDsbeomae4FXwgQTJp9Rs64Qg9vDiTCdBv",
    },
    {
        id: "co4",
        symbol: "ADA",
        amount: 200,
        orderType: "buy",
        status: "completed",
        price: 1.5,
        walletAddress: "DdzFFzCqrhsvY5wo8gZvR7tYQq6ie4yS4GkM39yW1uw8ZpT3LbznJm8vKNHuhnepYJF8RwhPd5TGQ3VvDvrG9ixFNFGZCVRhqZ6Q57F",
    },
    {
        id: "co5",
        symbol: "LTC",
        amount: 25,
        orderType: "sell",
        status: "pending",
        price: 110,
        walletAddress: "LcHKx4TtFt9XZiQJzv3dxLwLGiCqaAjbEz",
    },
    {
        id: "co6",
        symbol: "LINK",
        amount: 40,
        orderType: "buy",
        status: "completed",
        price: 25,
        walletAddress: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    },
    {
        id: "co7",
        symbol: "DOT",
        amount: 50,
        orderType: "sell",
        status: "failed",
        price: 35,
        walletAddress: "14nRo6rTW6G5b3jEM7f5rMymW4pZqNm6qq",
    },
    // Add more cryptocurrency orders as needed
];

export type CryptoOrder = {
    id: string;
    symbol: string;
    amount: number;
    orderType: "buy" | "sell";
    status: "pending" | "completed" | "failed";
    price: number;
    walletAddress: string; // New field for wallet address
}

export const columns: ColumnDef<CryptoOrder>[] = [
    // ... Other column definitions
    {
        accessorKey: "id",
        header: "ID",
        cell: ({ row }) => <div>{(row.getValue("id") as string).toUpperCase()}</div>,
        
    },
    {
        accessorKey: "symbol",
        header: "Symbol",
        cell: ({ row }) => <div>{row.getValue("symbol")}</div>,
        
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => <div>{row.getValue("amount")}</div>,
    },
    {
        accessorKey: "orderType",
        header: "Order Type",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("orderType")}</div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("status")}</div>
        ),
    },
    {
        accessorKey: "price",
        header: () => <div className="text-right">Price</div>,
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price"));
            return <div className="text-right">${price.toFixed(2)}</div>;
        },
    },
    {
        accessorKey: "walletAddress",
        header: () => <div className="text-right">Wallet Address</div>,
        cell: ({ row }) => <div className="text-right">{row.getValue("walletAddress")}</div>,
    },
    // ... Other column definitions
];

export function CryptoOrders() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Find Order..."
                    value={(table.getColumn("symbol")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("symbol")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
            
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}
