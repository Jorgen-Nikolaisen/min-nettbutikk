import {initializeApp} from "firebase/app";
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    } from "firebase/auth";
import{
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    
    objectsToAdd.forEach(element => {
        const docRef = doc(collectionRef, element.title.toLowerCase());
        batch.set(docRef, element);
    });
    
    await batch.commit();
    console.log("Done");
};


export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categoires");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
}



export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);
    
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

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return(
         await signInWithEmailAndPassword(auth, email, password)
    )
}

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth,callback);
}
