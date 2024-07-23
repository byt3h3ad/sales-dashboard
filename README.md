This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design decisions

I decided to use shadcn for the Table, ScrollArea components, and stripped down versions of the input and Button component to save time.

I assumed that the data has 4 main fields:

```typescript
type Data = {
  date: string;
  product: string;
  orders: number;
  sales: number;
};
```

The data manipulations are mostly implemented in the `src/lib/data.ts` file.

The user is spoofed using dummy data.

## Improvements

- Use `react-hook-form` with `zod` for login validation to improve security. Currently has none.

- Style the charts better and try out shadcn charts.

- Use a better colour scheme.

- Support light mode.

- Generate the dummy data using `[fakerjs](https://fakerjs.dev/)`.
