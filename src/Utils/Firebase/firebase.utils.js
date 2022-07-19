import {initializeApp} from "firebase/app";
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    } from "firebase/auth";
import{
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCL_Y3-5aTEKfl9-PnI2qk4R4Om7wIzawI",
    authDomain: "kles-butikk-9cef3.firebaseapp.com",
    projectId: "kles-butikk-9cef3",
    storageBucket: "kles-butikk-9cef3.appspot.com",
    messagingSenderId: "1052365320344",
    appId: "1:1052365320344:web:ebd356b43c45d2b77660ed"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  })

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation
            });
        } catch(error){
            console.log("error in creating user", error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return(
         await createUserWithEmailAndPassword(auth, email, password)
    )
}