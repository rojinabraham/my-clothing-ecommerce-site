import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDehf8pkTGxjEUAn1dgHMYM4OmV2zBEQdc",
  authDomain: "ecom-db-6c1eb.firebaseapp.com",
  databaseURL: "https://ecom-db-6c1eb.firebaseio.com",
  projectId: "ecom-db-6c1eb",
  storageBucket: "ecom-db-6c1eb.appspot.com",
  messagingSenderId: "398522159183",
  appId: "1:398522159183:web:6239a6d75951a5a6811a3a",
  measurementId: "G-6F5N91TLZ0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection(`users`);

  const snapShot = await userRef.get();
  // const collectionSnapShot = await collectionRef.get();
  // console.log({ collection: collectionSnapShot.docs.map((doc) => doc.data()) });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  console.log(snapShot);
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); //create new with ID
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      unsubcribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//gets access to new GoogleAuthProvider class from "auth" library
export const googleProvider = new firebase.auth.GoogleAuthProvider();
//trigger google pop up whenever we use googleauthprov for auth and sign in
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
