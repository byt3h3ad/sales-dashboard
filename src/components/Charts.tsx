// @ts-nocheck

"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Label,
  LabelList,
} from "recharts";
import { totalSalesPerDay, topProducts } from "@/lib/data";
import React from "react";
import { cn } from "@/lib/utils";

export const Charts: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const lastWeekSales = totalSalesPerDay.slice(-7);
  const topFiveProducts = topProducts.slice(0, 5);
  const topItems = topFiveProducts.map((d) => d.product);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div
      className={cn(
        "w-fullflex flex-col space-y-4 justify-content items-center",
        className
      )}
    >
      <div className="mx-auto space-y-3 m-4">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            height={400}
            data={lastWeekSales}
            margin={{ top: 50, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" padding={{ right: 20, left: 20 }}></XAxis>
            <YAxis
              dataKey="sales"
              // label={{
              //   value: "sales",
              //   angle: -90,
              //   position: "left",
              //   textAnchor: "middle",
              // }}
            />
            <Tooltip labelClassName="text-black" />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8">
              <LabelList dataKey="date" offset={12} position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-center text-sm">Last 7 days sales</p>
      </div>
      <hr />
      <div className="space-y-3 m-4">
        <ResponsiveContainer height={250}>
          <PieChart width={730} height={250}>
            <Pie
              data={topFiveProducts}
              dataKey="sales"
              fill="#8884d8"
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              legendType="circle"
            >
              {topFiveProducts.map((entry, index) => (
                <>
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                  {/* <Tooltip labelClassName="text-black" /> */}
                </>
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <p className="text-center text-sm">
          Sales of top five products: {topItems.join(", ")}
        </p>
      </div>
      <hr />
    </div>
  );
};
