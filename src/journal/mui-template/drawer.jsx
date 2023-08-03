import { TurnedInNot } from '@mui/icons-material';

import {
	Divider,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';

export const drawer = (
	<div>
		<Toolbar>
			<Typography variant='h6' noWrap component='div'>
				Leonardo Puebla
			</Typography>
		</Toolbar>
		<Divider />
		<List>
			{['Enero', 'Febrero', 'Marzo', 'Abril'].map((text) => (
				<ListItem key={text} disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<TurnedInNot />
						</ListItemIcon>
						<Grid container>
							<ListItemText primary={text} />
							<ListItemText
								secondary={'Fugiat adipisicing exercitation ullamco nostrud.'}
							/>
						</Grid>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	</div>
);
