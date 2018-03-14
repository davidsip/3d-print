import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

//export const onceGetUsername = () =>
 //≈ db.ref(`users/authUser.uid/username`).once('value');