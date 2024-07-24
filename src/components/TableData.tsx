import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";
import { data, totalSales } from "@/lib/data";
import { cn } from "@/lib/utils";

export const TableData: React.FC<React.HTMLAttributes<HTMLTableElement>> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        className,
        "text-xs md:text-base rounded-2xl md:p-4 border-neutral-500 space-y-3"
      )}
    >
      <div className="px-6 pt-4">
        <h1 className="text-xl md:text-2xl font-semibold">Orders</h1>
        <p className="text-gray-300">Recent orders for your store</p>
      </div>
      <div>
        <Table className="text-xs md:text-sm">
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Orders</TableHead>
              <TableHead className="text-right">Sales (in INR)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, idx) => (
              <TableRow key={idx} className="bg-neutral-900/60">
                <TableCell>{row.date}</TableCell>
                <TableCell className="">{row.product}</TableCell>
                <TableCell className="text-right">{row.orders}</TableCell>
                <TableCell className="text-right">₹ {row.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow className="my-auto">
              <TableCell colSpan={3}>Total Sales</TableCell>
              <TableCell className="text-bold text-right">
                ₹ {totalSales}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};
