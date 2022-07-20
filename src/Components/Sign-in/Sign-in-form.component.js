import { async } from "@firebase/util"
import { useState, useContext } from "react"
import { signInWithGooglePopup,signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, } from "../../Utils/Firebase/firebase.utils"
import FormInput from "../Form-input/Form-input.component"
import "./Sign-in-form.styles.scss"
import Button from "../Button/Button.component"
import { UserContext } from "../../Contexts/user.contexts"


const defaultFormFields = {
    email: "",
    password: "",
}


const SignInForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password, } = formFields;
    
    const {setCurrentUser} = useContext(UserContext)

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const {user} = await signInAuthUserWithEmailAndPassword(
                email, 
                password,
                );
            resetFormField();

        } catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("incorrect password for email")
                    break
                case "auth/user-not-found":
                    alert("no user found")
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target; 

        setFormFields({...formFields, [name]: value })

    }


    return(
        <div className="sign-up-container">
        <h2>Already have an account=</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
            
            <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>

            <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
            <div className="buttons-container">
                <Button  type="submit">Sign in</Button>
                <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google sign in</Button>
            </div>
            
        </form>
        </div>
    )
}

export default SignInForm