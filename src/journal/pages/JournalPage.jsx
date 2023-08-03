import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';

import { NothingSelectedView } from '../views/NothingSelectedView';
import { NoteView } from '../views/NoteView';

export const JournalPage = (props) => {
	const { window } = props;

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<Box component='main'>
				<JournalLayout container={container}>
					{/* <NothingSelectedView /> */}
					<NoteView />
				</JournalLayout>
			</Box>
		</>
	);
};

JournalPage.propTypes = {
	window: PropTypes.func,
};
