import { Box, Grid, Typography } from '@mui/material';
import image from '../../assets/diario.png';
import React from 'react';

export const AuthLayout = ({ children, title = '' }) => {
	return (
		<Box sx={{ width: '100%' }}>
			<Grid
				container
				spacing={0}
				columnSpacing={{ xs: 1, sm: 2, md: 6 }}
				alignItems='center'
				justifyContent='center'
				sx={{ minHeight: '100vh', backgroundColor: 'primary.main' }}
			>
				<Grid
					item
					sx={{
						display: { xs: 'none', md: 'none', lg: 'grid' },
						backgroundColor: 'terciary.main',
						height: '100vh',
					}}
					md={6}
					alignItems='center'
					justifyContent='center'
					className='box-shadow'
				>
					<Box
						className='box-shadow'
						sx={{
							padding: 3,
							backgroundColor: '#ba58ba',
							borderRadius: 2,
						}}
					>
						<img className='diario-img' src={image} />
					</Box>
				</Grid>
				<Grid item xs={10} sm={6} md={6} justifyContent='center' display='grid'>
					<Typography
						sx={{
							marginBottom: 5,
							fontSize: 40,
							textAlign: 'center',
							color: 'white',
						}}
					>
						Business Diary
					</Typography>
					<Box
						sx={{
							backgroundColor: 'white',
							padding: 3,
							borderRadius: 2,
							width: { sm: 450 },
						}}
						className='box-shadow'
					>
						<Typography variant='h5' sx={{ mb: 1 }}>
							{title}
						</Typography>
						{children}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
