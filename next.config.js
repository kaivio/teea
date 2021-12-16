import remarkFrontmatter from 'remark-frontmatter'
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.chalk = false
    }
    config.module.rules.push(
        {
          test: /\.ya?ml$/,
          type: 'json', // Required by Webpack v4
          use: 'yaml-loader'
        }
     ) 

    return config
  },
})
