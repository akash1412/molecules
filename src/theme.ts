export const theme = {
	colors: {
		text: '#000',
		primary: '#007bff',
		secondary: '#6c757d',
		background: '#fff',
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
		button: {
			borderRadius: '4px',
			border: 'none',
			outline: 'none',
		},
	},
};
