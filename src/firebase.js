import Firebase from 'firebase';

const firebaseConfig = {

};

const app = Firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const auth = app.auth();
