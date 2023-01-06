# Test GPA and Credit

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

required Node.js and MySQL to run

copy .env.example to .env

```bash
cp .env.example .env
```

if you're using XAMPP to run MySQL server then you can use this url

```bash
DATABASE_URL="mysql://root@localhost:3306/sw_test"
```

install dependencies

```
npm install
```

set up database using prisma

```bash
npx prisma db push
```

add input data

```bash
npx prisma db seed
```

run the server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
