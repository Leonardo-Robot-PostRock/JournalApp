import React from 'react';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { blueTheme } from './index';

export const AppTheme = ({ children }) => {
	return (
		<ThemeProvider theme={blueTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
