import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const doCreateElement = (productname,designer,price,description,picture) =>
 db.ref(`users/${designer}/${productname}`).set({
     price,
     description,
     picture,
 })