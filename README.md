This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Portfolio contact form

The form stays in preview until all six server-side variables are set for the
target deployment. Use only Suanara-owned or approved services.

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Resend sending key for Suanara |
| `CONTACT_FROM` | Sender address on a domain verified in Resend |
| `CONTACT_TO` | `Lerabari65@gmail.com` |
| `CONTACT_REDIS_URL` | HTTPS root endpoint for a Redis REST service supporting `EVAL` |
| `CONTACT_REDIS_TOKEN` | Credential for that Redis endpoint |
| `CONTACT_RATE_SECRET` | Random secret used to hash client IPs for rate limiting |

For local testing use a local mock Redis REST endpoint and set the Resend SDK's
`RESEND_BASE_URL` to a local mock. Keep live credentials out of local mock runs.
