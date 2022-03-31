import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{js,jsx,css}'],
    exclude: ['node_modules', '.git', '.next']
  },
  plugins: [require('windicss/plugin/typography')]
})
