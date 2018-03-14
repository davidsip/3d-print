import * as firebase from 'firebase';

const config={
    apiKey: "AIzaSyD8uoLEajmdN8rw8EDoIKggOHSDAJg8YXg",
    authDomain: "printer-1c171.firebaseapp.com",
    databaseURL: "https://printer-1c171.firebaseio.com",
    projectId: "printer-1c171",
    storageBucket: "printer-1c171.appspot.com",
    messagingSenderId: "198617925096",
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
