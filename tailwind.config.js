import icons from '@jcamp/tailwindcss-plugin-icons'

module.exports = {
  darkMode: 'class',
  plugins: [icons()],
  content: [
    './src/**/*.md',
    './src/.vitepress/**/*.{js,ts,vue}',
    './src/.vitepress/tintamarre-blog/theme/**/*.{js,ts,vue}',
  ],
}
