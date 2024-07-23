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
    <Table className={cn(className, "text-xs md:text-fray-rp")}>
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
          <TableRow key={idx}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.product}</TableCell>
            <TableCell className="text-right">{row.orders}</TableCell>
            <TableCell className="text-right">₹ {row.sales}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total Sales</TableCell>
          <TableCell className="text-bold text-right">₹ {totalSales}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
