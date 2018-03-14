import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const doCreateElement = (id,productname,price,description,picture) =>
 db.ref(`users/${id}/elements/${productname}`).set({
     price,
     description,
     picture,
 })