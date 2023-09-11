import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
      },
      colors: {
        primary: "#374151",
        secondary: "#6B7280",
        tertiary: "#22A9F5",
        neutral: "#4B5563",
        background: "#F9FAFB",
        darkprimary: "#d1d7e0",
        darksecondary: "#252930",
        darktertiary: "#22A9F5",
        darkneutral: "#aaaeb6",
        darkbackground: "#1d2127",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
