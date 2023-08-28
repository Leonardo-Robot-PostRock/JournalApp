import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Box, IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';

import { NothingSelectedView } from '../views/NothingSelectedView';
import { NoteView } from '../views/NoteView';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = (props) => {
	const { window } = props;

	const container = window !== undefined ? () => window().document.body : undefined;

	const dispatch = useDispatch();

	const onClickNewNote = () => {
		dispatch(startNewNote());
	};

	return (
		<>
			<Box component='main'>
				<JournalLayout container={container}>
					{/* <NothingSelectedView /> */}
					<NoteView />

					<IconButton
						onClick={onClickNewNote}
						size='large'
						sx={{
							color: 'white',
							backgroundColor: 'error.main',
							':hover': { backgroundColor: 'error.main', opacity: 0.9 },
							position: 'fixed',
							bottom: 50,
							right: 50,
							button: 50,
						}}
					>
						<AddOutlined sx={{ fontSize: 30 }} />
					</IconButton>
				</JournalLayout>
			</Box>
		</>
	);
};

JournalPage.propTypes = {
	window: PropTypes.func,
};
