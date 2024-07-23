import React from "react";
import { Charts } from "./Charts";
import { TableData } from "./TableData";
import { ScrollArea } from "./ScrollArea";

export const Dashboard = () => {
  return (
    <div className="grid grid-flow-row md:grid-cols-2 px-4">
      <Charts className="h-fit min-w-fit self-center place-items-center" />
      <ScrollArea className="h-[110vh] w-fit mx-auto py-4">
        <TableData className="border" />
      </ScrollArea>
    </div>
  );
};
