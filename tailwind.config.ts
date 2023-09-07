import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#eeeeee',
        'bg-dark': '#060513',
        'txt-light': '#14142c',
        'txt-dark': '#c6c6c6',
        primary: '#1d6262',
        'secondary-light': '#b8cce0',
        'secondary-dark': '#1b2d2d',
        'accent-light': '#171764',
        'accent-dark': '#4040d4',
      }
    },
  },
  plugins: [],
}
export default config
