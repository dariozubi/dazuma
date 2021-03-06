const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const withTM = require('next-transpile-modules')(['three']);

const withImages = require('next-images')

module.exports = withTM(withImages(withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  }
})))