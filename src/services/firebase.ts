import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAXoAi0ptFlB8y_xmes8Qsmn3Eg4v4BD0Q',
  authDomain: 'mobx-example-c2e6d.firebaseapp.com',
  databaseURL: 'https://mobx-example-c2e6d-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'mobx-example-c2e6d',
  storageBucket: 'mobx-example-c2e6d.appspot.com',
  messagingSenderId: '239400695992',
  appId: '1:239400695992:web:c667a23a772f5fd2e2dc4d',
};

firebase.initializeApp(config);

export const db = firebase.database();
