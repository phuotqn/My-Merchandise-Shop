import firebase from 'firebase';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyARjB3TujzRIBmZR0UrCt5ttjJbhWc1XGE',
  authDomain: 'fake-store-login.firebaseapp.com',
  projectId: 'fake-store-login',
  storageBucket: 'fake-store-login.appspot.com',
  messagingSenderId: '71920407793',
  appId: '1:71920407793:web:f64df9565f96d62a7f8550',
  measurementId: 'G-ZM68YWQR3Y',
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
