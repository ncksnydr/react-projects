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
				},
				pokeRed: {
					BASE: '#C41F25',
					dark: '#99181c'
				},
				normal: '#A8A878',
				grass: '#78C850',
				ground: '#E0C068',
				fighting: '#C03028',
				rock: '#B8A038',
				steel: '#B8B8D0',
				fire: '#F08030',
				electric: '#F8D030',
				flying: '#A890F0',
				psychic: '#F85888',
				bug: '#A8B820',
				dragon: '#7038F8',
				water: '#6890F0',
				ice: '#98D8D8',
				poison: '#A040A0',
				dark: '#705848',
				ghost: '#705898',
				fairy: '#FFAEC9'
			}
		},
  },
  plugins: [],
}
