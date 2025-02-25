import createMDX from "@next/mdx";
// import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // Configure `pageExtensions` to include markdown and MDX files
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [["remark-gfm"]],
        rehypePlugins: [],
    },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
