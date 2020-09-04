import firebase from "firebase/app";
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

  console.log(userAuth);
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//gets access to new GoogleAuthProvider class from "auth" library
const provider = new firebase.auth.GoogleAuthProvider();
//trigger google pop up whenever we use googleauthprov for auth and sign in
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
