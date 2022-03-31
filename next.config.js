import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeExternalLinks from 'rehype-external-links'

import fauxRemarkEmbedder from '@remark-embedder/core'
import fauxOembedTransformer from '@remark-embedder/transformer-oembed'
const remarkEmbedder = fauxRemarkEmbedder.default
const oembedTransformer = fauxOembedTransformer.default

const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  pageExtensions: ['md', 'mdx', 'jsx', 'js'],
  webpack: function (config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            rehypePlugins: [rehypeExternalLinks],
            remarkPlugins: [
              remarkGfm,
              remarkFrontmatter,
              [remarkEmbedder, { transformers: [oembedTransformer] }]
            ]
          }
        }
      ]
    })
    return config
  }
}

export default nextConfig
