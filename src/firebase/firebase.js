import * as firebase from 'firebase';

const config={
    apiKey: " see console ",
    authDomain: " see console ",
    databaseURL: " see console ",
    projectId: " see console ",
    storageBucket: " see console ",
    messagingSenderId: " see console ",
};
// is this getting called

if (!firebase.apps.length){
  firebase.initializeApp(config);
  console.log('init?');
}


const auth = firebase.auth();
const db = firebase.database();

export{
  auth,
  db,
};
