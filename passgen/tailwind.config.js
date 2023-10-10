/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
		fontFamily: {
			sans: ['Lato', 'sans-serif'],
			mono: ['Fira Mono', 'monospace']
		},
    extend: {
			colors: {
				primary: {
					'50': '#f2fbfa',
					'100': '#d2f5f0',
					'200': '#a5eae1',
					'300': '#70d8ce',
					'400': '#42bfb6',
					'500': '#2eb7b0',
					'600': '#1e8380',
					'700': '#1c6968',
					'800': '#1b5453',
					'900': '#1b4646',
					'950': '#0a2729',
				}
			}
		},
  },
  plugins: [],
}
