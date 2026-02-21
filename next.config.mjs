import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx$/,
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

export default withMDX(nextConfig)