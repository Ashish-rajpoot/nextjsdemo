import nextMDX from "@next/mdx";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

const withMdx = nextMDX({
  // By default only the `.mdx` extension is supported.
  extension: /\.mdx?$/,
  options: {
    /* otherOptions… */
  },
});

const nextConfig = withMdx({
  output: "export",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});


export default nextConfig;
