import { signInWithGoogle } from '../../firebase/providers';
import { checkingCredentials } from './authSlice';

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
		console.log({ result });
	};
};
