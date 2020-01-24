const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const withImages = require('next-images')

module.exports = withImages(withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
}))