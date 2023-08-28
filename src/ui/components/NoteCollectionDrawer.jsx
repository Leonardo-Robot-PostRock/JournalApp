import { useSelector } from 'react-redux';

import { Divider, List, Toolbar, Typography } from '@mui/material';
import { SideBarItem } from './SideBarItem';

export const NoteCollectionDrawer = () => {
	const { displayName } = useSelector((state) => state.auth);
	const { notes } = useSelector((state) => state.journal);

	return (
		<div>
			<Toolbar>
				<Typography variant='h6' noWrap component='div'>
					{displayName}
				</Typography>
			</Toolbar>
			<Divider />
			<List>
				{notes.map((note) => (
					<SideBarItem key={note.id} {...note} />
				))}
			</List>
		</div>
	);
};
