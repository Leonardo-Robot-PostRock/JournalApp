import React from 'react';

import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { Grid, IconButton, Toolbar, Typography, styled } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

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
					justifyContent='space-between'
					alignItems='center'
				>
					<Typography variant='h6' noWrap component='div'>
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
