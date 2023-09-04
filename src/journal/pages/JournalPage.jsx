import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { Box, IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';

import { NothingSelectedView } from '../views';
import { NoteView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = (props) => {
	const { window } = props;

	const container =
		window !== undefined ? () => window().document.body : undefined;

	const dispatch = useDispatch();
	const { isSaving, active: note } = useSelector((state) => state.journal);

	const onClickNewNote = () => {
		dispatch(startNewNote());
	};

	const isCreating = useMemo(() => isSaving === true, [isSaving]);

	return (
		<>
			<Box component='main'>
				<JournalLayout container={container}>
					{!!note ? <NoteView /> : <NothingSelectedView />}

					<IconButton
						disabled={isCreating}
						onClick={onClickNewNote}
						size='large'
						sx={{
							color: 'white',
							backgroundColor: 'error.main',
							':hover': { backgroundColor: 'error.main', opacity: 0.9 },
							position: { xs: 'relative', md: 'fixed' },
							bottom: { xs: '10px' },
							top: { lg: '10' },
							right: 0,
							button: 50,
						}}
					>
						<AddOutlined sx={{ fontSize: { xs: '20px', md: '30px' } }} />
					</IconButton>
				</JournalLayout>
			</Box>
		</>
	);
};

JournalPage.propTypes = {
	window: PropTypes.func,
};
