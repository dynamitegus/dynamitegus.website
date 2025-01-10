/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'text': 'var(--text)',
			'background': 'var(--base)',
			'accent': 'var(--pink)',
			'rosewater': 'var(--rosewater)',
			'flamingo': 'var(--flamigo)',
			'pink': 'var(--pink)',
			'mauve': 'var(--mauve)',
			'red': 'var(--red)',
			'maroon': 'var(--maroon)',
			'yellow': 'var(--yellow)',
			'green': 'var(--green)',
			'teal': 'var(--teal)',
			'sky': 'var(--sky)',
			'sapphire': 'var(--sapphire)',
			'blue': 'var(--blue)',
			'lavender': 'var(--lavender)',
			'text': 'var(--text)',
			'subtext1': 'var(--subtext1)',
			'subtext0': 'var(--subtext0)',
			'overlay2': 'var(--overlay2)',
			'overlay1': 'var(--overlay1)',
			'overlay0': 'var(--overlay0)',
			'surface2': 'var(--surface2)',
			'surface1': 'var(--surface1)',
			'surface0': 'var(--surface0)',
			'base': 'var(--base)',
			'mantle': 'var(--mantle)',
			'crust': 'var(--crust)'

		}
	},
	plugins: [
		require("@catppuccin/tailwindcss")({
			// prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
			// default is `false`, which means no prefix
			prefix: "ctp",
			// which flavour of colours to use by default, in the `:root`
			defaultFlavour: "mocha",
		  }),
	],

	   
}
