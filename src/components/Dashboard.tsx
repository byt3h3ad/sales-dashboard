import React from "react";
import { Charts } from "./Charts";
import { TableData } from "./TableData";
import { ScrollArea } from "./ScrollArea";

export const Dashboard = () => {
  return (
    <div className="grid grid-flow-row md:grid-cols-2 px-1 sm:px-4">
      <Charts className="h-fit min-w-fit self-center place-items-center" />
      <ScrollArea className="h-[110vh] min-w-1/2 flex justify-center items-center px-0 sm:px-2 py-4 ">
        <TableData className="border border-gray-800 overflow-auto" />
      </ScrollArea>
    </div>
  );
};
