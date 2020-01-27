const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const withTM = require('next-transpile-modules')(['three']);

const withImages = require('next-images')

module.exports = withTM(withImages(withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})))