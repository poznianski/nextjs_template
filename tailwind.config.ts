import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--hover)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
        },
        background: {
          DEFAULT: 'var(--background)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        border: {
          DEFAULT: 'var(--border)',
        },
        state: {
          error: 'var(--error)',
          success: 'var(--success)',
          disabled: 'var(--disabled)',
        },
      },
      backgroundColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      borderColor: {
        primary: 'var(--border)',
      },
      ringColor: {
        focus: 'var(--focus)',
      },
      boxShadow: {
        theme: 'var(--shadow)',
      },
    },
  },
  plugins: [
    // Custom plugin to add theme utility classes
    plugin(({ addUtilities }) => {
      const themeUtilities = {
        '.theme-serene': {
          '--primary': 'var(--st-primary)',
          '--secondary': 'var(--st-secondary)',
          '--accent': 'var(--st-accent)',
          '--background': 'var(--st-background)',
          '--text-primary': 'var(--st-text-primary)',
          '--text-secondary': 'var(--st-text-secondary)',
          '--border': 'var(--st-border)',
          '--hover': 'var(--st-hover)',
          '--error': 'var(--st-error)',
          '--success': 'var(--st-success)',
          '--focus': 'var(--st-focus)',
          '--disabled': 'var(--st-disabled)',
          '--shadow': 'var(--st-shadow)',
        },
        '.theme-professional': {
          '--primary': 'var(--pw-primary)',
          '--secondary': 'var(--pw-secondary)',
          '--accent': 'var(--pw-accent)',
          '--background': 'var(--pw-background)',
          '--text-primary': 'var(--pw-text-primary)',
          '--text-secondary': 'var(--pw-text-secondary)',
          '--border': 'var(--pw-border)',
          '--hover': 'var(--pw-hover)',
          '--error': 'var(--pw-error)',
          '--success': 'var(--pw-success)',
          '--focus': 'var(--pw-focus)',
          '--disabled': 'var(--pw-disabled)',
          '--shadow': 'var(--pw-shadow)',
        },
        '.theme-modern': {
          '--primary': 'var(--mi-primary)',
          '--secondary': 'var(--mi-secondary)',
          '--accent': 'var(--mi-accent)',
          '--background': 'var(--mi-background)',
          '--text-primary': 'var(--mi-text-primary)',
          '--text-secondary': 'var(--mi-text-secondary)',
          '--border': 'var(--mi-border)',
          '--hover': 'var(--mi-hover)',
          '--error': 'var(--mi-error)',
          '--success': 'var(--mi-success)',
          '--focus': 'var(--mi-focus)',
          '--disabled': 'var(--mi-disabled)',
          '--shadow': 'var(--mi-shadow)',
        },
        '.theme-calm': {
          '--primary': 'var(--cu-primary)',
          '--secondary': 'var(--cu-secondary)',
          '--accent': 'var(--cu-accent)',
          '--background': 'var(--cu-background)',
          '--text-primary': 'var(--cu-text-primary)',
          '--text-secondary': 'var(--cu-text-secondary)',
          '--border': 'var(--cu-border)',
          '--hover': 'var(--cu-hover)',
          '--error': 'var(--cu-error)',
          '--success': 'var(--cu-success)',
          '--focus': 'var(--cu-focus)',
          '--disabled': 'var(--cu-disabled)',
          '--shadow': 'var(--cu-shadow)',
        },
        '.theme-balanced': {
          '--primary': 'var(--bt-primary)',
          '--secondary': 'var(--bt-secondary)',
          '--accent': 'var(--bt-accent)',
          '--background': 'var(--bt-background)',
          '--text-primary': 'var(--bt-text-primary)',
          '--text-secondary': 'var(--bt-text-secondary)',
          '--border': 'var(--bt-border)',
          '--hover': 'var(--bt-hover)',
          '--error': 'var(--bt-error)',
          '--success': 'var(--bt-success)',
          '--focus': 'var(--bt-focus)',
          '--disabled': 'var(--bt-disabled)',
          '--shadow': 'var(--bt-shadow)',
        },
      }
      addUtilities(themeUtilities)
    }),
  ],
}
export default config
