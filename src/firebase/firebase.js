import * as firebase from 'firebase';

const config={
    apiKey: "AIzaSyD8uoLEajmdN8rw8EDoIKggOHSDAJg8YXg",
    authDomain: "printer-1c171.firebaseapp.com",
    databaseURL: "https://printer-1c171.firebaseio.com",
    projectId: "printer-1c171",
    storageBucket: "printer-1c171.appspot.com",
    messagingSenderId: "198617925096"
};
// is this getting called

if (!firebase.apps.length){
  firebase.initializeApp(config);
  console.log('init?');
}

// Useful console debug code to print out if a user signed out
// Uncomment code and when a user is signed in, if they sign
// out the console should print out sign out
// 		that's the idea
//		it is just printing signout no matter what
//		fuck
firebase.auth().signOut().then(function() {
  console.log('Signed Out');
}, function(error) {
  console.error('Sign Out Error', error);
});

// athur has this line
// const config = process.env.NODE_ENV === 'production'

const auth = firebase.auth();
const db = firebase.database();

export{
  auth,
  db,
};
