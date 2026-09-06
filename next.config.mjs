import nextMDX from '@next/mdx'
import { fileURLToPath } from 'node:url'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['rehype-slug'],
    // Absolute path: Turbopack requires plugins as strings, and the MDX loader
    // resolves them relative to the article's directory.
    recmaPlugins: [
      fileURLToPath(
        new URL('./src/lib/recmaMdxStaticExports.mjs', import.meta.url),
      ),
    ],
  },
})

export default withMDX(nextConfig)
