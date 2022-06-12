import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { firebaseConfig } from "../constants";

initializeApp(firebaseConfig);

export const db = getFirestore();
const auth = getAuth();

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.reduce((acc, docSnap) => {
    const { title, items } = docSnap.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
export const createUserDocumentFromAuth = async (userAuth, addOn = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { name, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        name,
        email,
        createdAt,
        ...addOn,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
      throw error;
    }
  }

  return true;
};
export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log("firebase error", error.code);
    switch (error.code) {
      case "auth/too-many-requests":
        throw new Error("Too Many Requests");
      case "auth/wrong-password":
        throw new Error("Wrong Password");
      case "auth/user-not-found":
        throw new Error("User Not Found");
    }
  }
};
