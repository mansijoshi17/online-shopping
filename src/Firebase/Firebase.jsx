import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWdUwFZGxc7L2U8PKilgiAu9zJR8yOhzs",
    authDomain: "crwn-database-87c16.firebaseapp.com",
    databaseURL: "https://crwn-database-87c16.firebaseio.com",
    projectId: "crwn-database-87c16",
    storageBucket: "crwn-database-87c16.appspot.com",
    messagingSenderId: "942259238195",
    appId: "1:942259238195:web:84efee40b23b290ca77a46",
    measurementId: "G-T4DY8XS072"
};

export const createUserProfileDocument  = async (userAuth , additionalData) => {
    if(!userAuth) return ;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

   if(!snapShot.exists)
   {
       const {displayName, email , photoURL} = userAuth;
       const createdAt = new Date();

       try {
           await userRef.set({
               displayName,
               email,
               createdAt, 
               photoURL,
               ...additionalData
           })
       } catch (error) {
           console.log('error creating user', error.message);
       }
   } 

   return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;