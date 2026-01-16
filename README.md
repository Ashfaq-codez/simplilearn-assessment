This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

# Simplilearn Dallas Roundtable Landing Page

This is a pixel-perfect recreation of the Dallas Roundtable landing page for the SDE-1 Technical Assessment.

## Tech Stack
* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS
* **Backend:** Next.js Server Actions
* **Database:** Airtable
* **Validation:** Zod

## Features
* **Pixel-Perfect Design:** Matches the Figma mockup 100% across desktop and mobile.
* **Server-Side Logic:** Form submission is handled securely via Server Actions; API keys are never exposed to the client.
* **Real-time Database:** RSVPs are instantly synced to an Airtable Base.
* **Input Validation:** Zod schema ensures only valid work emails are processed.

## Getting Started

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Set up `.env.local` with Airtable credentials.
4.  Run development server: `npm run dev`

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
