import { useDispatch } from 'react-redux';

import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Box, CssBaseline, Grid, IconButton, Toolbar, Typography } from '@mui/material';

import { startLogout } from '../../store/auth';

export const Navbar = ({ drawerWidth, handleDrawerToggle }) => {
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(startLogout());
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuOutlined />
					</IconButton>

					<Grid
						container
						direction='row'
						flexWrap='nowrap'
						justifyContent='space-between'
						alignItems='center'
					>
						<Typography variant='h6' noWrap flexShrink={0} component='div'>
							JournalApp
						</Typography>
						<IconButton color='error' onClick={onLogout}>
							<LogoutOutlined />
						</IconButton>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
