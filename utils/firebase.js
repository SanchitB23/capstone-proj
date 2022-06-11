import {initializeApp} from 'firebase/app';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,} from 'firebase/auth';
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore';
import {firebaseConfig} from '../constants';

initializeApp(firebaseConfig);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, addOn = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {name, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        name,
        email,
        createdAt,
        ...addOn,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
      throw error;
    }
  }

  return true;
};
const auth = getAuth();
export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("firebase error", error.code)
    switch (error.code) {
      case 'auth/too-many-requests':
        throw new Error('Too Many Requests');
      case 'auth/wrong-password':
        throw new Error('Wrong Password');
      case 'auth/user-not-found':
        throw new Error('User Not Found');
    }
  }
};
