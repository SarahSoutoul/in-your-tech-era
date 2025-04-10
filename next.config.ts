import type { NextConfig } from "next";
import createMDX from '@next/mdx'

// Use the withMDX HOC to enable MDX support in Next.js
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"], // Add .mdx as a valid page extension
  experimental: {
    mdxRs: false, // Disable mdx-rs compiler
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
