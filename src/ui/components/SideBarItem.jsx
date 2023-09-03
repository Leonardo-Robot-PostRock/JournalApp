import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { setActiveNote } from '../../store/journal/journalSlice';

export const SideBarItem = ({ title, body, date, id, imageUrls = [] }) => {
	const { active } = useSelector((state) => state.journal);
	const dispatch = useDispatch();

	const onActiveNote = () => {
		console.log(active);
		dispatch(setActiveNote({ title, body, date, id, imageUrls }));
	};

	const newTitle = useMemo(() => {
		return title.length > 17 ? title.substring(0, 17) + '...' : title;
	}, [title]);

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={onActiveNote}>
				<ListItemIcon>
					<TurnedInNot />
				</ListItemIcon>
				<Grid container>
					<ListItemText primary={newTitle} />
					<ListItemText secondary={body} />
				</Grid>
			</ListItemButton>
		</ListItem>
	);
};
