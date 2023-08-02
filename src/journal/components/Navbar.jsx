import React from 'react';

import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { Grid, IconButton, Toolbar, Typography } from '@mui/material';

import { AppBar } from '../styled-components/AppBar';

export const Navbar = ({ open, setOpen }) => {
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	return (
		<AppBar position='fixed' open={open}>
			<Toolbar>
				<IconButton
					color='inherit'
					aria-label='open drawer'
					onClick={handleDrawerOpen}
					edge='start'
					sx={{ mr: 2, ...(open && { display: 'none' }) }}
				>
					<MenuOutlined />
				</IconButton>

				<Grid
					container
					direction='row'
                    flexWrap="nowrap"
                    justifyContent='space-between'
					alignItems='center'
				>
					<Typography variant='h6' noWrap flexShrink={0} component='div'>
						JournalApp
					</Typography>
					<IconButton color='error'>
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
