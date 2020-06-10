import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD5RuphexFo5qCd7EH7PkU56H5Bz19v9ew',
  authDomain: 'learn-words-7fbf7.firebaseapp.com',
  databaseURL: 'https://learn-words-7fbf7.firebaseio.com',
  projectId: 'learn-words-7fbf7',
  storageBucket: 'learn-words-7fbf7.appspot.com',
  messagingSenderId: '708289730564',
  appId: '1:708289730564:web:97a2442b3b1c4f0ce6fd51',
  measurementId: 'G-4GEKRETX1N',
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
