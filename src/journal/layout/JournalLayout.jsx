import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';

import { Navbar, SideBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({ children, container }) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
			<Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
			<SideBar
				drawerWidth={drawerWidth}
				container={container}
				mobileOpen={mobileOpen}
				handleDrawerToggle={handleDrawerToggle}
			/>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
