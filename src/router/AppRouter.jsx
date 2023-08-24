import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/pages';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { CheckingAuth } from '../ui';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';

export const AppRouter = () => {
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async (user) => {
			if (!user) return dispatch(logout());

			const { uid, email, displayName, photoURL } = user;

			dispatch(login({ uid, email, displayName, photoURL }));
		});
	}, []);

	if (status === 'checking') {
		return <CheckingAuth />;
	}

	return (
		<Routes>
			{/* Otro tipo de protección de rutas */}
			{status === 'authenticated' ? (
				<Route path='/*' element={<JournalRoutes />} />
			) : (
				<Route path='/auth/*' element={<AuthRoutes />} />
			)}

			<Route path='/*' element={<Navigate to='/auth/login' />} />
			{/* Login y Registro */}
			{/* <Route path='/auth/*' element={<AuthRoutes />} /> */}

			{/* JournalApp */}
			{/* <Route path='/*' element={<JournalRoutes />} /> */}
		</Routes>
	);
};
