type Data = {
  date: string;
  product: string;
  orders: number;
  sales: number;
};

export const data: Data[] = [
  { date: "2024-07-22", product: "Denim jeans", orders: 3000, sales: 67000 },
  { date: "2024-07-22", product: "T-shirts", orders: 4000, sales: 87000 },
  { date: "2024-07-22", product: "Shoes", orders: 9000, sales: 187000 },
  { date: "2024-07-22", product: "Hoodies", orders: 2000, sales: 50000 },
  { date: "2024-07-22", product: "Watches", orders: 1500, sales: 75000 },
  { date: "2024-07-22", product: "Shirts", orders: 2500, sales: 60000 },
  { date: "2024-07-23", product: "Denim jeans", orders: 2800, sales: 62000 },
  { date: "2024-07-23", product: "T-shirts", orders: 4200, sales: 91000 },
  { date: "2024-07-23", product: "Shoes", orders: 8500, sales: 176000 },
  { date: "2024-07-23", product: "Hoodies", orders: 2100, sales: 52000 },
  { date: "2024-07-23", product: "Watches", orders: 1600, sales: 76000 },
  { date: "2024-07-23", product: "Shirts", orders: 2600, sales: 62000 },
  { date: "2024-07-24", product: "Denim jeans", orders: 3200, sales: 71000 },
  { date: "2024-07-24", product: "T-shirts", orders: 3800, sales: 82000 },
  { date: "2024-07-24", product: "Shoes", orders: 9200, sales: 190000 },
  { date: "2024-07-24", product: "Hoodies", orders: 2200, sales: 54000 },
  { date: "2024-07-24", product: "Watches", orders: 1700, sales: 77000 },
  { date: "2024-07-24", product: "Shirts", orders: 2700, sales: 64000 },
  { date: "2024-07-25", product: "Denim jeans", orders: 2900, sales: 64000 },
  { date: "2024-07-25", product: "T-shirts", orders: 4100, sales: 89000 },
  { date: "2024-07-25", product: "Shoes", orders: 8800, sales: 182000 },
  { date: "2024-07-25", product: "Hoodies", orders: 2300, sales: 56000 },
  { date: "2024-07-25", product: "Watches", orders: 1800, sales: 78000 },
  { date: "2024-07-25", product: "Shirts", orders: 2800, sales: 66000 },
  { date: "2024-07-26", product: "Denim jeans", orders: 3100, sales: 69000 },
  { date: "2024-07-26", product: "T-shirts", orders: 3900, sales: 84000 },
  { date: "2024-07-26", product: "Shoes", orders: 9100, sales: 188000 },
  { date: "2024-07-26", product: "Hoodies", orders: 2400, sales: 58000 },
  { date: "2024-07-26", product: "Watches", orders: 1900, sales: 79000 },
  { date: "2024-07-26", product: "Shirts", orders: 2900, sales: 68000 },
  { date: "2024-07-27", product: "Denim jeans", orders: 3300, sales: 73000 },
  { date: "2024-07-27", product: "T-shirts", orders: 4300, sales: 93000 },
  { date: "2024-07-27", product: "Shoes", orders: 9400, sales: 194000 },
  { date: "2024-07-27", product: "Hoodies", orders: 2500, sales: 60000 },
  { date: "2024-07-27", product: "Watches", orders: 2000, sales: 80000 },
  { date: "2024-07-27", product: "Shirts", orders: 3000, sales: 70000 },
  { date: "2024-07-28", product: "Denim jeans", orders: 2700, sales: 60000 },
  { date: "2024-07-28", product: "T-shirts", orders: 3700, sales: 80000 },
  { date: "2024-07-28", product: "Shoes", orders: 8300, sales: 172000 },
  { date: "2024-07-28", product: "Hoodies", orders: 2600, sales: 62000 },
  { date: "2024-07-28", product: "Watches", orders: 2100, sales: 81000 },
  { date: "2024-07-28", product: "Shirts", orders: 3100, sales: 72000 },
  { date: "2024-07-29", product: "Denim jeans", orders: 3400, sales: 75000 },
  { date: "2024-07-29", product: "T-shirts", orders: 4400, sales: 95000 },
  { date: "2024-07-29", product: "Shoes", orders: 9600, sales: 198000 },
  { date: "2024-07-29", product: "Hoodies", orders: 2700, sales: 64000 },
  { date: "2024-07-29", product: "Watches", orders: 2200, sales: 82000 },
  { date: "2024-07-29", product: "Shirts", orders: 3200, sales: 74000 },
  { date: "2024-07-30", product: "Denim jeans", orders: 3000, sales: 66000 },
  { date: "2024-07-30", product: "T-shirts", orders: 4000, sales: 86000 },
  { date: "2024-07-30", product: "Shoes", orders: 8900, sales: 184000 },
  { date: "2024-07-30", product: "Hoodies", orders: 2800, sales: 66000 },
  { date: "2024-07-30", product: "Watches", orders: 2300, sales: 83000 },
  { date: "2024-07-30", product: "Shirts", orders: 3300, sales: 76000 },
  { date: "2024-07-31", product: "Denim jeans", orders: 3200, sales: 70000 },
  { date: "2024-07-31", product: "T-shirts", orders: 4200, sales: 90000 },
  { date: "2024-07-31", product: "Shoes", orders: 9300, sales: 192000 },
  { date: "2024-07-31", product: "Hoodies", orders: 2900, sales: 68000 },
  { date: "2024-07-31", product: "Watches", orders: 2400, sales: 84000 },
  { date: "2024-07-31", product: "Shirts", orders: 3400, sales: 78000 },
];

const salesPerDay = data.reduce((acc, item) => {
  // @ts-expect-error
  if (!acc[item.date]) {
    // @ts-expect-error
    acc[item.date] = 0;
  }
  // @ts-expect-error
  acc[item.date] += item.sales;
  return acc;
}, {});

export const totalSalesPerDay = Object.entries(salesPerDay).map(
  ([date, sales]) => {
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
    }).format(new Date(date));
    return { date: formattedDate, sales };
  }
);

const salesPerProduct = data.reduce((acc, item) => {
  // @ts-expect-error
  if (!acc[item.product]) {
    // @ts-expect-error
    acc[item.product] = 0;
  }
  // @ts-expect-error
  acc[item.product] += item.sales;
  return acc;
}, {});

export const topProducts = Object.entries(salesPerProduct)
  .map(([product, sales]) => ({ product, sales }))
  // @ts-expect-error
  .sort((a, b) => b.sales - a.sales);

export const totalSales = data.reduce((acc, item) => acc + item.sales, 0);
