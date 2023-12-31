import {
	loginWithEmailPassword,
	logoutFirebase,
	registerUserWithEmailPassword,
	signInWithGoogle,
} from '../../firebase/providers';
import { clearNotesLogout } from '../journal/journalSlice';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = () => {
	// Podría suprimirse esta funcion y enviar sólo la acción del reducer dado que es una tarea síncrona la que se ejecuta
	return async (dispatch) => {
		dispatch(checkingCredentials());
	};
};

export const startGoogleSignIn = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await signInWithGoogle();

		if (!result.ok) {
			dispatch(logout(result.errorMessage));
			return;
		}

		dispatch(login(result));
	};
};

export const startCreatingUserWithEmailPassword = ({
	email,
	password,
	displayName,
}) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const { ok, uid, photoURL, errorMessage } =
			await registerUserWithEmailPassword({
				email,
				password,
				displayName,
			});

		if (!ok) return dispatch(logout({ errorMessage }));

		dispatch(login({ uid, displayName, email, photoURL }));
	};
};

export const startLoginWithEmailPassword = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await loginWithEmailPassword({
			email,
			password,
		});

		if (!result.ok) return logout(dispatch(logout(result)));

		dispatch(login(result));
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		await logoutFirebase();
		dispatch(clearNotesLogout());

		dispatch(logout({}));
	};
};
