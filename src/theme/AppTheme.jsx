import React from 'react';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { tealBlueTheme } from './index';

export const AppTheme = ({ children }) => {
	return (
		<ThemeProvider theme={tealBlueTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
