import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

import { ImageGallery } from '../components/ImageGallery';

import { useForm } from '../../hooks';

export const NoteView = () => {
	const { active: note } = useSelector((state) => state.journal);

	const { body, title, onInputChange, formState, date } = useForm(note);

	const dateString = useMemo(() => {
		const newDate = new Date(date);

		return newDate.toUTCString();
	}, [date]);

	return (
		<Grid
			className='animate__animated animate__fadeIn animate__faster'
			container
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{
				mb: 1,
				width: { xs: '100%', md: '70%' },
				margin: { md: '0 auto' },
			}}
		>
			<Grid item>
				<Typography fontSize={30} fontWeight='light'>
					{dateString}
				</Typography>
			</Grid>
			<Grid item>
				<Button color='primary' sx={{ padding: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>
			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='Ingrese un título'
					label='Título'
					sx={{ border: 'none', mb: 1 }}
					name='title'
					value={title}
					onChange={onInputChange}
				/>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='¿Qué sucedió en el día de hoy?'
					minRows={5}
					name='body'
					value={body}
					onChange={onInputChange}
				/>
			</Grid>

			<ImageGallery />
		</Grid>
	);
};
