import React, { useState } from 'react';

import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';

import { Main } from '../styled-components/Main';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { NoteView } from '../views/NoteView';

export const JournalPage = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Main open={open}>
				<JournalLayout open={open} setOpen={setOpen}>
					{/* <NothingSelectedView /> */}
					<NoteView />
				</JournalLayout>
			</Main>
		</>
	);
};
