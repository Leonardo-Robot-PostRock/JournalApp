import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

import { mapAuthCodeToMessage } from './mapAuthCodeToMessage';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		// const credentials = GoogleAuthProvider.credentialFromResult(result);

		const { displayName, email, photoURL, uid } = result.user;
		return {
			ok: true,
			//User info
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const registerUserWithEmailPassword = async ({
	email,
	password,
	displayName,
}) => {
	try {
		console.log({ email, password, displayName });

		const resp = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);
		const { uid, photoURL } = resp.user;

		await updateProfile(FirebaseAuth.currentUser, {
			displayName,
		});

		return {
			ok: true,
			uid,
			photoURL,
			email,
			displayName,
		};
	} catch (error) {
		return { ok: false, errorMessage: mapAuthCodeToMessage(error.code) };
	}
};

export const loginWithEmailPassword = async ({ email, password }) => {
	try {
		const resp = await signInWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);

		const { uid, photoURL, displayName } = resp.user;

		return { ok: true, uid, photoURL, displayName };
	} catch (error) {
		return { ok: false, errorMessage: mapAuthCodeToMessage(error.code) };
	}
};
