export default {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.chalk = false
    }
    config.module.rules.push(
        {
          test: /\.ya?ml$/,
          type: 'json', // Required by Webpack v4
          use: 'yaml-loader'
        },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: './lib/loader.js',
            options: {
              remarkPlugins: [],
              rehypePlugins: [],

            }
          }
        ]
      }
     ) 

    return config
  },
}
