import { async } from "@firebase/util"
import {signInWithGooglePopup} from "../../../Utils/Firebase/firebase.utils"
import { createUserDocumentFromAuth } from "../../../Utils/Firebase/firebase.utils"
const Signin = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        
    }
    return(
        <>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </>
    )
}
export default Signin