import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	DeleteOutline,
	SaveOutlined,
	UploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import '../styles/custom-target.css';

import { ImageGallery } from '../components/ImageGallery';

import { useForm } from '../../hooks';
import { setActiveNote } from '../../store/journal/journalSlice';
import {
	startSaveNote,
	startUploadingFiles,
	startDeletingNote,
} from '../../store/journal/thunks';

export const NoteView = () => {
	const dispatch = useDispatch();
	const {
		active: note,
		messageSaved,
		isSaving,
	} = useSelector((state) => state.journal);

	const { body, title, onInputChange, formState, date } = useForm(note);

	const dateString = useMemo(() => {
		const newDate = new Date(date);

		return newDate.toUTCString();
	}, [date]);

	const fileInputRef = useRef();

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (messageSaved.length > 0) {
			// Swal.fire('Nota actualizada', messageSaved, 'success');
			Swal.fire({
				title: 'Nota actualizada',
				target: '#custom-target',
				text: messageSaved,
				toast: true,
				customClass: {
					container: 'position-absolute',
				},
				position: 'top-center',
				icon: 'success',
			});
		}
	}, [messageSaved]);

	const onSaveNote = () => {
		dispatch(startSaveNote());
	};

	const onFileInputChange = ({ target }) => {
		if (target.files === 0) return;
		dispatch(startUploadingFiles(target.files));
	};

	const onDelete = () => {
		dispatch(startDeletingNote());
	};

	return (
		<Grid
			className='animate__animated animate__fadeIn animate__faster'
			container
			direction='row'
			position='relative'
			justifyContent='space-between'
			alignItems='center'
			sx={{
				mb: 1,
				width: { xs: '100%', md: '70%' },
				margin: { md: '0 auto' },
			}}
		>
			<Grid item>
				<Typography
					fontWeight='light'
					sx={{ fontSize: { xs: '16px', sm: '20px', lg: '30px' } }}
					noWrap
				>
					{dateString}
				</Typography>
			</Grid>
			{/* Personalización de mensaje de alerta al guardar cambios */}
			{isSaving ? <div id='custom-target'></div> : ''}
			<Grid item>
				<input
					type='file'
					multiple
					ref={fileInputRef}
					onChange={onFileInputChange}
					style={{ display: 'none' }}
				/>
				<IconButton
					color='primary'
					disabled={isSaving}
					onClick={() => fileInputRef.current.click()}
				>
					<UploadOutlined />
				</IconButton>
				<Button
					disabled={isSaving}
					color='primary'
					sx={{ padding: 2 }}
					onClick={onSaveNote}
				>
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
			<Grid container justifyContent='end'>
				<Button onClick={onDelete} sx={{ mt: 2 }} color='error'>
					<DeleteOutline />
				</Button>
			</Grid>

			{/* Image Gallery */}
			<ImageGallery images={note.imageUrls} />
		</Grid>
	);
};
