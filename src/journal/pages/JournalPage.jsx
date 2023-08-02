import React, { useState } from 'react';

import { Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import styled from '@emotion/styled';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

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
