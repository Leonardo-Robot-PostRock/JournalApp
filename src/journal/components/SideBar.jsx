import { useSelector } from 'react-redux';

import { Box, Drawer } from '@mui/material';
import { CustomDrawer } from '../mui-template';

export const SideBar = ({ drawerWidth, mobileOpen, handleDrawerToggle, container }) => {
	return (
		<Box
			component='nav'
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
			aria-label='mailbox folders'
		>
			<Drawer
				container={container}
				variant='temporary'
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: 'block', sm: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}
			>
				<CustomDrawer />
			</Drawer>
			<Drawer
				variant='permanent'
				sx={{
					display: { xs: 'none', sm: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
				}}
				open
			>
				<CustomDrawer />
			</Drawer>
		</Box>
	);
};
