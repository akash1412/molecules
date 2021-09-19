export const theme = {
	colors: {
		text: '#000',
		primary: '#03071e',
		secondary: '#6c757d',
		background: '#fff',

		social: {
			spotify: {
				bg: '#1DB954',
				text: '#000000;',
			},
			google: {
				bg: '#ffffff',
				text: '#000',
			},
			facebook: {
				bg: '#4267B2',
				text: '#fff',
			},
		},
		avatar: {
			bgColor: '#ffd166',
		},
		badges: {
			default: 'rgb(125, 125, 125)',
			information: 'rgb(59, 192, 242)',
			success: 'rgb(115, 205, 31)',
			warning: 'rgb(244, 156, 32)',
			danger: 'rgb(209, 75, 73)',
		},
	},
	avatar: {
		sizes: {
			xs: '24px',
			sm: '32px',
			md: '40px',
			lg: '48px',
			xl: '72px',
		},
	},
	fonts: {
		body:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		heading: 'Roboto, serif',
		monospace: 'Menlo, monospace',
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
	sizes: {
		xs: 5,
		sm: 6,
		md: 7,
		lg: 8, // default size
		xl: 8,
		'2xl': '1.5rem',
		'3xl': '1.875rem',
		'4xl': '2.25rem',
		'5xl': '3rem',
		'6xl': '3.75rem',
		'7xl': '4.5rem',
		'8xl': '6rem',
		'9xl': '8rem',
	},
	// sizes: {
	// 	xs: '0.75rem',
	// 	sm: '0.875rem',
	// 	md: '1rem',
	// 	lg: '1.125rem', // default size
	// 	xl: '1.25rem',
	// 	'2xl': '1.5rem',
	// 	'3xl': '1.875rem',
	// 	'4xl': '2.25rem',
	// 	'5xl': '3rem',
	// 	'6xl': '3.75rem',
	// 	'7xl': '4.5rem',
	// 	'8xl': '6rem',
	// 	'9xl': '8rem',
	// },
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},

	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	letterSpacings: {
		body: 'normal',
		caps: '0.2em',
	},
	border: [2, 4, 6, , 8, 10],
	styles: {
		root: {
			boxSizing: 'border-box',
		},
	},
	text: {
		heading: {
			color: 'primary',
		},
	},
	buttons: {
		default: {
			color: '#000',
		},
		primary: {
			bg: 'primary',
			color: '#fff',
		},
		secondary: {},
		spotify: {
			bg: 'social.spotify.bg',
			color: 'social.spotify.text',
		},
		google: {
			bg: 'social.google.bg',
			color: 'social.google.text',
			boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
		},
		facebook: {
			bg: 'social.facebook.bg',
			color: 'social.facebook.text',
		},
	},
};
