/** @type {import('tailwindcss').Config} */
module.exports = {
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
          '615A4CDF-E6BD-4F32-B6DE-971F3A71A4CD': "url('./assets/615A4CDF-E6BD-4F32-B6DE-971F3A71A4CD.png')",
      },
    },
  },
  plugins: [require("daisyui")],
}
