import { Box, Toolbar } from '@mui/material';
import React from 'react';
import { Navbar, SideBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children, open, setOpen }) => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Navbar drawerWidth={drawerWidth} open={open} setOpen={setOpen} />
			<SideBar drawerWidth={drawerWidth} open={open} setOpen={setOpen} />
			<Box component='main' sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
