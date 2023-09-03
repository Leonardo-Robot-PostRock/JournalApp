import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const tealBlueTheme = createTheme({
	palette: {
		primary: {
			main: '#008080', // Blue primary color
		},
		secondary: {
			main: '#388E3C', // Green secondary color (you can replace this with your desired secondary color)
		},
		error: {
			main: red.A400, // Red error color (you can replace this with your desired red color)
		},
	},
});
