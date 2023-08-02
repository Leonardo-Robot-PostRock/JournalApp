import React, { useState } from 'react';

import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';

import { Main } from '../styled-components/Main';

export const JournalPage = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Main open={open}>
				<JournalLayout open={open} setOpen={setOpen}>
					<Typography paragraph>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
						nulla. Non voluptatem, quis expedita cum minima ex quasi unde
						explicabo omnis. Quos earum repellat totam ut illo repudiandae
						voluptas rerum! Quae reiciendis est eos sequi expedita consectetur
						corporis quo! Sint amet odit ipsa impedit velit itaque nihil
						similique non ab quia, distinctio totam quae. Distinctio eligendi
						veniam praesentium a adipisci!
					</Typography>
				</JournalLayout>
			</Main>
		</>
	);
};
