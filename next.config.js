const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
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
