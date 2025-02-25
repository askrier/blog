# Overview

Hi! My name is Andrew and this is the code for my blog. I'm not trying to do too
much with it, mostly just things that I think are fun/funny. Let me know if you
have any questions!

## Technical Details

This is a Next.js project because that was the easiest way I saw to marry React
and .mdx files

I mostly followed
[this guide](https://nextjs.org/docs/pages/building-your-application/configuring/mdx)
for the beginnings, the one key difference was that I had to rename the
`next.config.ts` file to have the `.mjs` extension

One key learning from that experience was noting that page router and app router
are two different approaches to making your website. I mostly committed to the
app router way due to its simple integration with page templates.

Run development server with `npm run dev`
