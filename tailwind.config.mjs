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
    		crust: 'var(--crust)',
            // Adding all variables from mockup.css
            black: 'var(--black)',
            white: 'var(--white)',
            gray: {
                100: 'var(--gray-100)',
                200: 'var(--gray-200)',
                300: 'var(--gray-300)',
                400: 'var(--gray-400)',
                500: 'var(--gray-500)',
                600: 'var(--gray-600)',
                700: 'var(--gray-700)',
                800: 'var(--gray-800)',
                900: 'var(--gray-900)'
            },
            red: {
                100: 'var(--red-100)',
                200: 'var(--red-200)',
                300: 'var(--red-300)',
                400: 'var(--red-400)',
                500: 'var(--red-500)',
                600: 'var(--red-600)',
                700: 'var(--red-700)',
                800: 'var(--red-800)',
                900: 'var(--red-900)'
            },
            orange: {
                100: 'var(--orange-100)',
                200: 'var(--orange-200)',
                300: 'var(--orange-300)',
                400: 'var(--orange-400)',
                500: 'var(--orange-500)',
                600: 'var(--orange-600)',
                700: 'var(--orange-700)',
                800: 'var(--orange-800)',
                900: 'var(--orange-900)'
            },
            yellow: {
                100: 'var(--yellow-100)',
                200: 'var(--yellow-200)',
                300: 'var(--yellow-300)',
                400: 'var(--yellow-400)',
                500: 'var(--yellow-500)',
                600: 'var(--yellow-600)',
                700: 'var(--yellow-700)',
                800: 'var(--yellow-800)',
                900: 'var(--yellow-900)'
            },
            green: {
                100: 'var(--green-100)',
                200: 'var(--green-200)',
                300: 'var(--green-300)',
                400: 'var(--green-400)',
                500: 'var(--green-500)',
                600: 'var(--green-600)',
                700: 'var(--green-700)',
                800: 'var(--green-800)',
                900: 'var(--green-900)'
            },
            teal: {
                100: 'var(--teal-100)',
                200: 'var(--teal-200)',
                300: 'var(--teal-300)',
                400: 'var(--teal-400)',
                500: 'var(--teal-500)',
                600: 'var(--teal-600)',
                700: 'var(--teal-700)',
                800: 'var(--teal-800)',
                900: 'var(--teal-900)'
            },
            blue: {
                100: 'var(--blue-100)',
                200: 'var(--blue-200)',
                300: 'var(--blue-300)',
                400: 'var(--blue-400)',
                500: 'var(--blue-500)',
                600: 'var(--blue-600)',
                700: 'var(--blue-700)',
                800: 'var(--blue-800)',
                900: 'var(--blue-900)'
            },
            indigo: {
                100: 'var(--indigo-100)',
                200: 'var(--indigo-200)',
                300: 'var(--indigo-300)',
                400: 'var(--indigo-400)',
                500: 'var(--indigo-500)',
                600: 'var(--indigo-600)',
                700: 'var(--indigo-700)',
                800: 'var(--indigo-800)',
                900: 'var(--indigo-900)'
            },
            purple: {
                100: 'var(--purple-100)',
                200: 'var(--purple-200)',
                300: 'var(--purple-300)',
                400: 'var(--purple-400)',
                500: 'var(--purple-500)',
                600: 'var(--purple-600)',
                700: 'var(--purple-700)',
                800: 'var(--purple-800)',
                900: 'var(--purple-900)'
            },
            pink: {
                100: 'var(--pink-100)',
                200: 'var(--pink-200)',
                300: 'var(--pink-300)',
                400: 'var(--pink-400)',
                500: 'var(--pink-500)',
                600: 'var(--pink-600)',
                700: 'var(--pink-700)',
                800: 'var(--pink-800)',
                900: 'var(--pink-900)'
            },
            mauve: 'var(--mauve)',
            violet: 'var(--violet)',
            purple: 'var(--purple)',
            indigo: 'var(--indigo)',
            blue: 'var(--blue)',
            lightBlue: 'var(--lightBlue)',
            cyan: 'var(--cyan)',
            teal: 'var(--teal)',
            emerald: 'var(--emerald)',
            green: 'var(--green)',
            lime: 'var(--lime)',
            yellow: 'var(--yellow)',
            amber: 'var(--amber)',
            orange: 'var(--orange)',
            red: 'var(--red)',
            warmGray: 'var(--warmGray)',
            trueGray: 'var(--trueGray)',
            gray: 'var(--gray)',
            coolGray: 'var(--coolGray)',
            blueGray: 'var(--blueGray)'
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
