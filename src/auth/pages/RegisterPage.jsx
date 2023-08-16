import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../Layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
	email: 'leonardo@google.com',
	password: '123456',
	displayName: 'Leonardo Puebla',
};

export const RegisterPage = () => {
	const { displayName, email, password, onInputChange, formState } =
		useForm(formData);

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
	};

	return (
		<AuthLayout title='Crear cuenta'>
			<form onSubmit={onSubmit}>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Nombre completo'
							type='text'
							placeholder='Nombre completo'
							fullWidth
							name='displayName'
							value={displayName}
							onChange={onInputChange}
						></TextField>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Correo'
							type='email'
							placeholder='Correo'
							fullWidth
							name='email'
							value={email}
							onChange={onInputChange}
						></TextField>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Contraseña'
							type='password'
							placeholder='Contraseña'
							fullWidth
							name='password'
							value={password}
							onChange={onInputChange}
						></TextField>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12} sm={6}>
							<Button variant='contained' type='submit' fullWidth>
								Crear cuenta
							</Button>
						</Grid>
					</Grid>
					<Grid container direction='row' justifyContent='end'>
						<Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
						<Link component={RouterLink} color='inherit' to='/auth/login'>
							Ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
