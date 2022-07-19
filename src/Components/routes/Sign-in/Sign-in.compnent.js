import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"
import { async } from "@firebase/util"
import {signInWithGooglePopup} from "../../../Utils/Firebase/firebase.utils"
import { createUserDocumentFromAuth, 
    signInWithGoogleRedirect,
    auth,
     } from "../../../Utils/Firebase/firebase.utils"
import SignUpForm from "../../Sign-up/Sign-up-form.component"

const Signin = () => {
    
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        
    };

    return(
        <>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm/>
        </>
    )
}
export default Signin