import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#16171B',
        'bg-secondary': '#222327',
        'text-main': '#c0c0c0',
        'theme-main': '#00796b',
      },
    },
  },
  plugins: [],
}
export default config
