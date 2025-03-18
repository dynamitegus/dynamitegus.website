/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	},
    	colors: {
    		text: 'var(--text)',
    		background: 'var(--base)',
    		accent: 'var(--pink)',
    		rosewater: 'var(--rosewater)',
    		flamingo: 'var(--flamingo)',
    		pink: 'var(--pink)',
    		mauve: 'var(--mauve)',
    		red: 'var(--red)',
    		maroon: 'var(--maroon)',
    		peach: 'var(--peach)',
    		yellow: 'var(--yellow)',
    		green: 'var(--green)',
    		teal: 'var(--teal)',
    		sky: 'var(--sky)',
    		sapphire: 'var(--sapphire)',
    		blue: 'var(--blue)',
    		lavender: 'var(--lavender)',
    		subtext1: 'var(--subtext1)',
    		subtext0: 'var(--subtext0)',
    		overlay2: 'var(--overlay2)',
    		overlay1: 'var(--overlay1)',
    		overlay0: 'var(--overlay0)',
    		surface2: 'var(--surface2)',
    		surface1: 'var(--surface1)',
    		surface0: 'var(--surface0)',
    		base: 'var(--base)',
    		mantle: 'var(--mantle)',
    		crust: 'var(--crust)'
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
		  require('@tailwindcss/typography'),
        require("tailwindcss-animate")
    ],

	   
}
