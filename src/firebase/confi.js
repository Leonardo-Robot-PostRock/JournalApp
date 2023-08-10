// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAHVWPxoWPMQGLBRtPpx76gUK1xx0OmvXk',
	authDomain: 'journalapp-bc28a.firebaseapp.com',
	projectId: 'journalapp-bc28a',
	storageBucket: 'journalapp-bc28a.appspot.com',
	messagingSenderId: '957923258094',
	appId: '1:957923258094:web:3af9522445ee811bc5cdff',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
